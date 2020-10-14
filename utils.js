import { pokeData } from './raw-data.js';

export const CAPTURED = 'CAPTURED';


export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}


export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);
}


export function findByName(someArray, someName) {
    for (let i = 0; i < someArray.length; i++) {
        const arrayItem = someArray[i];

        if (arrayItem.name === someName) {
            return arrayItem;
        }
    }
}