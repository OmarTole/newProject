'use strict'

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// function showGoodFilms(arr) {

//     arr = arr.filter(item => {
//         return item.rating >= 8;
//     })
//     return arr;
// }

// const showGF = showGoodFilms(films);


// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    arr = arr.map((item, i) => {
        item.id = i++
        return item
    });
    return arr;
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    const result = arr.every(item => {
        console.log(item);
        return item.id === 0 || item.id;
    })

    return result;
}

console.log(checkFilms(tranformedArray));