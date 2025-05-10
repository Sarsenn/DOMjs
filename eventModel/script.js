'use strict';

const btns = document.querySelectorAll('button'),
	  overlay = document.querySelector('.overlay'),
	  link = document.querySelector('a');

/* btn.onclick = function () {
	alert('Hello')
} */

const deletEl = (e) => {
	console.log(e.currentTarget)
	console.log(e.type)
}

btn.addEventListener('click', deletEl); // Можно навешивать несколько обработчиков на один элемент. Такой синтаксис нужен для удаление обработчикая
/* btn.removeEventListener('click', deletEl) */
overlay.addEventListener('click', deletEl)

btn.addEventListener('click', (e) => {
});

link.addEventListener('click', (e) => {
	e.preventDefault();
})

