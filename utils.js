

export function findByName(someArray, someName) {
    for (let i = 0; i < someArray.length; i++) {
        const arrayItem = someArray[i];

        if (arrayItem.name === someName) {
            return arrayItem;
        }
    }
}