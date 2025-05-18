'use strict';
//touchstart касания 
//touchmove	передвижение с касанием 
//touchend	касания убрано
//touchenter передвижение с касанием 
//touchleave передвижение с касанием уход
//touchcancle 
//touches
//currentTouches
//changedTouches

const arr = [1,11,2,45,2,3,4]
console.log(arr.sort((a, b) => {return a - b}))

document.addEventListener('DOMContentLoaded', () => {

	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();
		console.log('Start')
		console.log(e.targetTouches[0].pageX)
	})

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();
		console.log('Start')
		console.log(e.targetTouches[0].pageX)
	})

	box.addEventListener('touchend', (e) => {
		e.preventDefault();
		console.log('Start')
	})

})