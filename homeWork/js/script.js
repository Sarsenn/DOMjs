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

document.addEventListener('DOMContentLoaded', () => {
  const filmItems = document.querySelector(".promo__interactive-list");
document.querySelectorAll(".promo__adv img").forEach((item) => item.remove());
document.querySelector(".promo__genre").textContent = "ДРАМА";
document.querySelector(".promo__bg").style.cssText =
  'background:url("img/bg.jpg") center center/cover no-repeat;';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

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

const input = document.querySelector(".adding__input"),
  aproved = document.querySelector("button");

aproved.addEventListener("click", (e) => {
  e.preventDefault();
  let movie = input.value;
  if (movie.length > 21) {
    movie = movie.slice(0, 21);
    movie += "...";
  }
  movieDB.movies.push(movie);
  refreshMovieData();
});


filmItems.addEventListener("click", (e) =>{
  let current = e.target;
  
  if (current.classList.contains("delete")) {
    movieDB.movies.forEach((film, i) => {
      let currentFilm = current.parentElement.textContent.replace(`${i + 1}.`, "").replace(/\s+/g, "");

      if (film.replace(/\s+/g, "") == currentFilm) {
        movieDB.movies.splice(i, 1);
        console.log(movieDB.movies);
      }
    });
    current.parentElement.remove();
    refreshMovieData();
  }
});


const chekbox = document.querySelector('input[type="checkbox"]');
chekbox.addEventListener("click", (e) => {
  if (chekbox.checked) {
    console.log("Добавляем любимый фильм");
  }
});

})
