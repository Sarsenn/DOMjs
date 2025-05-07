'use strict';
// Это старые методы
const box = document.getElementById('box'); 
const btn = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
console.log(circle);

// Это новые методы
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
	console.log(item)
})
const oneHeart = document.querySelector('div')
console.log(oneHeart);