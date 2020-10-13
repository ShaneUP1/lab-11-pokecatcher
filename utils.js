import { pokeData } from './raw-data.js';



export function generatePokemon(pokeData) {

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

    return poke1, poke2, poke3;
}


export function findByName(someArray, someName) {
    for (let i = 0; i < someArray.length; i++) {
        const arrayItem = someArray[i];

        if (arrayItem.name === someName) {
            return arrayItem;
        }
    }
}