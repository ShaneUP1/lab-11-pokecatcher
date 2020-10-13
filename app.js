// import functions and grab DOM elements

import { pokeData } from './raw-data.js';

const results = document.querySelector('#results');
const radios = document.querySelectorAll('input');
const images = document.querySelectorAll('label > img');
const resetButton = document.querySelector('button');




// initialize state
let rounds = 0;
let resultsArray = [];

// set event listeners to update state and DOM

function generatePokemon(pokeData) {
    let rand1 = Math.floor(Math.random() * pokeData.length);

    let rand2 = Math.floor(Math.random() * pokeData.length);

    let rand3 = Math.floor(Math.random() * pokeData.length);

    while (rand1 === rand2 || rand1 === rand3 || rand2 === rand3) {
        rand1 = Math.floor(Math.random() * pokeData.length);
        rand2 = Math.floor(Math.random() * pokeData.length);
        rand3 = Math.floor(Math.random() * pokeData.length);
    }
    const poke1 = pokeData[rand1];
    const poke2 = pokeData[rand2];
    const poke3 = pokeData[rand3];

    radios[0].value = poke1.pokemon;
    images[0].src = poke1.url_image;

    radios[1].value = poke2.pokemon;
    images[1].src = poke2.url_image;

    radios[2].value = poke3.pokemon;
    images[2].src = poke3.url_image;

    // for (let i = 0; i < radios.length; i++) {
    //     rounds++;

    //     const pokeStored = {
    //         pokemon: poke[i].pokemon,
    //         encountered: 1,
    //         captured: 1,
    //     };

    //     if (resultsArray.includes(pokeStored)) {
    //         pokeStored.encountered++;
    //     }
    //     push.resultsArray(pokeStored);

    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', (e) => {
            rounds++;

            console.log(e.target.value);
            // create objects of each pokemon

            // check to see if they already exist in our
            // resultsArray and if so increase their encounters and potentially captures 

            // push the object into our resultsArray
        });







    }
}
generatePokemon(pokeData);

