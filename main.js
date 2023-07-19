'use strict';

const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели')

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов'),
          b = prompt('На сколько вы его оцените?');

    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    console.log('Вы довольно мало фильмов посмотрели!');
} else if (personalMovieDB.count > 10) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);