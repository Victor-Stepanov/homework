'use strict';
const container = document.querySelector('.container');
const buttons = container.querySelectorAll('button');
const counter = container.querySelector('.counter');

container.addEventListener('click', onButtonChangeState);

function onButtonChangeState(event) {
  const button = event.target.closest('button');
  if (!button || button.hasAttribute('data')) {
    return;
  }
  buttons.forEach(btn => {
    btn.removeAttribute('data');
    btn.textContent = 'Нажми меня';
  });
  button.setAttribute('data', 'active');
  button.textContent = 'Нажата';

  counter.textContent = String(parseInt(counter.textContent) + 1);
}
