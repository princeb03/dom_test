'use strict';
const container = document.querySelector('div#container');
const pRed = document.createElement('p');
const h3Blue = document.createElement('h3');
const div = document.createElement('div');
const h1div = document.createElement('h1');
const pdiv = document.createElement('p');

pRed.textContent = 'hey im red';
h3Blue.textContent = 'im a blue h3';
h1div.textContent = 'this is a div child';
pdiv.textContent = 'also a div child';

pRed.style.color = 'red';
h3Blue.style.color = 'blue';
div.style.cssText = 'border-color: black; background-color: pink;';
h1div.classList.add('test');


container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(div);
div.appendChild(h1div);
div.appendChild(pdiv);

const button = document.querySelector('#btn');
button.addEventListener('click', function (e) {
    e.target.classList.toggle('test');
    console.log(e.target.getAttribute('class'));
});
