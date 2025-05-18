'use strict'

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.box')


/* console.log(btns[0].classList.length)
console.log(btns[0].classList.item(0))
btns[0].classList.add('red', 'trrra');
btns[0].classList.remove('blue');
btns[0].classList.toggle('blue');

if(btns[0].classList.contains('red')){
	console.log('Eben')
} */

btns[0].addEventListener('click', () => {
	btns[0].classList.add('red')
})

btns[1].addEventListener('click', () => {
	if(!btns[1].classList.contains('red')) {
		btns[1].classList.add('red')
	} else {
		btns[1].classList.remove('red')
	}
})

wrapper.addEventListener('click', (e) => {
	if(e.target && e.target.matches('button.red')) {
		console.log('Hello')
	}
})

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)