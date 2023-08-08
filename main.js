'use strict'

// let number0fFilms

// function start() {
//     number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?')

//     while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
//         number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?')
//     }
// }

// start()

// const personalMovieDB = {
//     count: number0fFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,
//     rememberMyFilms: () => {  // Функция для присваивания в movies спсиок фильмов название и оценка
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?').trim();
//             const b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: () => {  //Функция для оценки человека к какой категорий он относится
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман!");
//         } else {
//             console.log("Произошла ошибка!");
//         };
//     },

//     showMyDB: (hidden) => { //Функция показывает свойства personalMovieDB если hidden false
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: () => {   
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },

//     writeYourGenres: () => {
//         for (let i = 0; i < 3;) {
//             personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
//             if (personalMovieDB.genres[i] != null) personalMovieDB.genres[i] = personalMovieDB.genres[i].trim();
//             if (personalMovieDB.genres[i] == '' || +personalMovieDB.genres[i] == Number || personalMovieDB.genres[i] == null) {
//                 alert('Введите нормальное значение!')
//             } else {
//                 i++;
//             }
//         };
//     },
//     forEach: () => {
//         let {genres} = personalMovieDB;
//         let i = 1;
//         for (let item of genres) {
            
//             console.log(`Ваш любимый жанр №${i} ${item}`);
//             i++
//         }
//     }
// };

// personalMovieDB.writeYourGenres();
// // personalMovieDB.toggleVisibleMyDB()
// // personalMovieDB.showMyDB(personalMovieDB.privat)
// personalMovieDB.forEach();

let btns = document.querySelector('.move')
let wrapper = document.querySelector('.btn-block')
let btnAll = document.querySelectorAll('.btn-block button')

btns.addEventListener('click', () => {
    // if (!btns.classList.contains('red')) {
    //     btns.classList.add('red')
    // } else {
    //     btns.classList.remove('red')
    // }

    btns.classList.toggle('red')
})

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// })

let btn = document.createElement('button');
btn.classList.add('red')
wrapper.append(btn);

btnAll.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    })
})



