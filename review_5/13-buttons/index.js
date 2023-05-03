'use strict';
const container = document.querySelector('.container');
const counter = container.querySelector('.counter');

let count = 0;
const nodes = container.children;

for (let i = 0; i < nodes.length; i++) {
  const currentElement = nodes[i];
  if (currentElement instanceof HTMLButtonElement) {
    currentElement.addEventListener('click', changeState);
  }
}

function changeState(event) {
  if (event.currentTarget.innerHTML === 'Нажали') {
    event.currentTarget.innerHTML = 'Нажми меня';
    counter.innerHTML = --count;
  } else {
    event.currentTarget.innerHTML = 'Нажали';
    counter.innerHTML = ++count;
  }
}
