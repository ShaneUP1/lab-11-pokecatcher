var ctx = document.getElementById('myChart').getContext('2d');

import { getFromLocalStorage } from '../utils.js';


const newPokeArray = getFromLocalStorage('POKEMON') || [];



const pokemonNumbers = [];
const labels = [];

for (let i = 0; i < newPokeArray.length; i++) {
    const singlePoke = newPokeArray[i];

    pokemonNumbers.push(singlePoke.captured);
    labels.push(singlePoke.name);
}

const colors = [
    'lavender',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
const borders = [
    'orange',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];
console.log(labels, pokemonNumbers);

new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        // labels: labels,
        labels,
        datasets: [{
            label: '# of Pokemo Caught',
            data: pokemonNumbers,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
