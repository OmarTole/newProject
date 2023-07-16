let number0fFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count : number0fFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
}

let a = prompt('Один из последних просмотренных фильмов?');
let b = prompt('оценка')


personalMovieDB.movies[a] = b;


console.log(personalMovieDB);