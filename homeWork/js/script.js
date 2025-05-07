/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
const filmItems = document.querySelectorAll(".promo__interactive-item");
document.querySelectorAll(".promo__adv img").forEach(item => item.remove());
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
movieDB.movies.sort();

filmItems.forEach((item, i) => {
    item.innerHTML = `${i + 1}.${movieDB.movies[i]}<div class="delete"></div>`
});
