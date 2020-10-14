var ctx = document.getElementById('pokemonChart').getContext('2d');
var cty = document.getElementById('pokeEButNotC').getContext('2d');

import { getFromLocalStorage } from '../utils.js';


const newPokeArray = getFromLocalStorage('POKEMON') || [];



const pokemonCaught = [];
const pokemonSeen = [];
const labels = [];

for (let i = 0; i < newPokeArray.length; i++) {
    const singlePoke = newPokeArray[i];

    pokemonCaught.push(singlePoke.captured);
    pokemonSeen.push(singlePoke.encountered);
    labels.push(singlePoke.name);
}


const colors = [
    'lavender',
    'red',
    'orange',
    'yellow',
    'green',
    'indigo',
    'blue',
    'violet',

];
const borders = [
    'orange',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];


new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: labels,
        labels,
        datasets: [{
            label: 'Times Pokemon Seen',
            data: pokemonSeen,
            backgroundColor: 'lightblue',
            borderColor: 'orange',
            borderWidth: 3,
        }, {
            label: 'Times Pokemon Caught',
            data: pokemonCaught,
            backgroundColor: 'yellow',
            borderColor: 'orange',
            borderWidth: 3,
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                beginAtZero: true
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


const seenButNeverCaught = [];
const seenThisManyTimes = [];
console.log(seenButNeverCaught);
console.log(seenThisManyTimes);

for (let i = 0; i < newPokeArray.length; i++) {

    const indPokemon = newPokeArray[i];
    if (indPokemon.encountered !== 0 && indPokemon.captured === 0) {
        seenButNeverCaught.push(indPokemon.name);
        seenThisManyTimes.push(indPokemon.encountered);
    }
}

new Chart(cty, {
    type: 'bar',
    data: {
        // labels: labels,
        labels: seenButNeverCaught,
        datasets: [{
            label: 'Pokemon Seen But Never Caught',
            data: seenThisManyTimes,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
