"use strict";


//let resultBoolean = confirm("hi, ТЫ ТУТ?");

//console.log(resultBoolean);


//const answer = prompt("Вам есть 18?", "18");

//console.log(answer + 5);

//const category = 'toys';


/*
// пример как было раньше 
console.log('https://someurl.com/' + category);
// пример как делают сейчас 
console.log(`https://someurl.com/${category}`);
*/

//console.log('arr' + " - object");
//console.log(4 + "5"); // 45
//console.log(4 + +"5"); // 9


// Постфиксная форма записи (ставим знаки после значения)
/*let incr = 10,
    decr = 10;

    incr++; // Оператор инкремента 
    decr--; // Оператор декремента

    console.log(incr); // Получим 11 ибо увеличили на 1-ед
    console.log(decr); // Получим 9 ибо уменьшили на 1 ед
*/

// Префиксная форма записи (ставим знаки перед значением)
/*let incr = 10,
    decr = 10;

    ++incr; // Оператор инкремента 
    --decr; // Оператор декремента

    console.log(incr); // Получим 11 ибо увеличили на 1-ед
    console.log(decr); // Получим 9 ибо уменьшили на 1 ед
*/

   /* let incr = 10,
    decr = 10;

    //++incr; // Оператор инкремента 
    //--decr; // Оператор декремента

    console.log(++incr); // Получим 11 ибо увеличили на 1-ед
    console.log(--decr); // Получим 9 ибо уменьшили на 1 ед
*/


//console.log(5%2);


//console.log(2*4 === 8);

/*
&& - Оператор 'и'; // если выражение 1 (true) && выражение 2 (true) то проверка выведет true 
|| - Оператор 'или';
*/

/*const isChecked = false,
      isClose = false;

      console.log(isChecked || !isClose);


      console.log(2 + 2 * 2 === 8);*/




      // lesson 1

      const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');


      // lesson 2

      const personMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
      };


      // lesson 3

      const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
            movieRate = prompt('На сколько оцените его?', ''),
            lastWatchedMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
            movieRate1 = prompt('На сколько оцените его?', '');
 
      personMovieDB.movies[lastWatchedMovie] = movieRate;
      personMovieDB.movies[lastWatchedMovie1] = movieRate1;

      console.log(personMovieDB);