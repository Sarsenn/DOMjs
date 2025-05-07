"use strict";
// Это старые методы
const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circle = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector(".hearts");
const wrapper = document.querySelector('.wrapper')

// Для стилей
box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
box.style.cssText = `background-color: blue; width: 600px;`;

//Для перебора
for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "blue";
}

hearts.forEach(item => {
	item.style.backgroundColor = 'purple'
})


//Создание элемента
const div = document.createElement('div');
const text = document.createTextNode('Iam here');

//Создание классов для стилей
div.classList.add('black');

//добавление элементов на страницу 
document.body.append(div); // Добавляется в конец браузера
document.querySelector('.wrapper').append(div); // Один элемент нельзя добваить два раза
wrapper.prepend(div)// Добавить внутри перед 
hearts[0].before(div)// тоже перед элементом
hearts[0].after(div)// после элемента
wrapper.insertBefore(div, hearts[0])
wrapper.removeChild(hearts[1])

circle[0].remove()
hearts[1].replaceWith(circle[0]);
wrapper.replaceChild(circle[1], hearts[0])


const div2 = document.createElement('div');
div2.classList.add('red');
div2.style.backgroundColor = 'red';
div2.style.width = '300px'
div2.style.height = '300px'
document.body.append(div2);

div2.innerHTML = '<h1>Hello World!</h1>';
div.textContent = 'Hi'
div2.insertAdjacentHTML('afterend', '<h3>Yeahh</h3>')







