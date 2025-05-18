/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const filmItems = document.querySelector(".promo__interactive-list");
  const adv = document.querySelectorAll(".promo__adv img");
  const gen =  document.querySelector(".promo__genre");
  const bg = document.querySelector(".promo__bg")

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const delAds = (ads) => {
    ads.forEach((item) => item.remove());
  }
  delAds(adv);

  const makeChage = (gener, bgc) => {
    gener.textContent = 'ДРАМА';
    bgc.style.cssText = 'background:url("img/bg.jpg") center center/cover no-repeat;';

  }

  makeChage(gen, bg);
 

  function refreshMovieData() {
    movieDB.movies.sort();
    filmItems.innerHTML = "";
    movieDB.movies.forEach((item, i) => {
      filmItems.insertAdjacentHTML(
        "beforeend",
        `<li class="promo__interactive-item">
    ${i + 1}.${movieDB.movies[i]}
    <div class="delete"></div>
      </li>`
      );
    });
  }

  refreshMovieData();

  const input = document.querySelector(".adding__input");
  const aproved = document.querySelector("button");
  const chekbox = document.querySelector('input[type="checkbox"]');  

  function addFilm(film, data) {
    let movie = film.value;
    movie = movie.trim()

    if(movie) {

      if (movie.length > 21) {
        movie = `${movie.substring(0, 22)}...`
      }

      data.push(movie);
      refreshMovieData();
    }



  }

  aproved.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(chekbox.checked) {
      addFilm(input, movieDB.movies);
      console.log("Добавляем любимый фильм");
    } else {
      addFilm(input, movieDB.movies);
    }
    
  });

  filmItems.addEventListener("click", (e) => {
    let current = e.target;

    if (current.classList.contains("delete")) {
      movieDB.movies.forEach((film, i) => {
        let currentFilm = current.parentElement.textContent
          .replace(`${i + 1}.`, "")
          .replace(/\s+/g, "");

        if (film.replace(/\s+/g, "") == currentFilm) {
          movieDB.movies.splice(i, 1);
          console.log(movieDB.movies);
        }
      });
      current.parentElement.remove();
      refreshMovieData();
    }
  });


});
