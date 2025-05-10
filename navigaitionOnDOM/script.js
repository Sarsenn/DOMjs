'use strict';
console.log(document.documentElement); // Для получение всего документа 
console.log(document.body.childNodes); // Для получение узлов страницы
console.log(document.body.firstChild);
console.log(document.body.lastChild);

//Для получение соседей и дочерных элементов 
console.log(document.querySelector('#current').parentNode)
console.log(document.querySelector('#current').parentElement)
console.log(document.querySelector('#current').parentNode.parentNode)
console.log(document.querySelector('[data-current="3"]').nextSibling)
console.log(document.querySelector('[data-current="3"]').previousSibling)
console.log(document.querySelector('[data-current="3"]').nextElementSibling)


for (let node of document.body.childNodes) {
	if(node.nodeName == '#text') {
		continue;
	}
	console.log(node)
}

const btn = document.querySelector('#current'),
	  parent = document.querySelector('.first');

btn.addEventListener('click', (e) => {
	e.stopPropagation()
	console.log(e.target);
})

parent.addEventListener('click', (e) => {
	console.log(e.target)
} )

const arr = [3, 3, 3]

if(arr.length === 0) {
	console.log('Arr Right')
}