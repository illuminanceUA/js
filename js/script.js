"use strict";

      let numberOfFilms;


      function start() {

        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
        }

      }

      start();
      
      const personMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
      };
  
      

      function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
          const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
          movieRate = prompt('На сколько оцените его?', '');
  
          if (lastWatchedMovie != null && movieRate != null && lastWatchedMovie != '' && movieRate != '' && lastWatchedMovie.length < 50) {
              personMovieDB.movies[lastWatchedMovie] = movieRate;
              console.log('Done!');
          } else {
              console.log('Error');
              i--;
          }
         
        }
      }

    //  rememberMyFilms();

      function detectPersonalLevel() {
          if (personMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personMovieDB.count >= 10 && personMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personMovieDB.count >= 30) {
          alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
      }

     // detectPersonalLevel();


      function showMyDB(hidden) {
        if (!hidden) {
           console.log(personMovieDB);
        }
      
      }

      showMyDB(personMovieDB.private);


      function writeYourGenres() {

        for (let i = 1; i <= 3; i++) {

          const genreNumber = prompt(`Ваш любимый жанр по номером ${i}`, '');
          personMovieDB.genres[i - 1] = genreNumber;
  
        }
       
      }

      writeYourGenres();

     // console.log(personMovieDB); 


    

    

      


      


