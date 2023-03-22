'use strict';
const NEW_YEAR_DATE = '01/01/2024';
//DOM
const listContainer = document.querySelector('.list');
const buttonsContainer = document.querySelector('.buttons');

const newYearDate = new Date(NEW_YEAR_DATE);

const subElements = {
  listMonth: listContainer.querySelector('#month'),
  listDay: listContainer.querySelector('#day'),
  listHours: listContainer.querySelector('#hours'),
  listMinuts: listContainer.querySelector('#minutes'),
  listSeconds: listContainer.querySelector('#seconds'),
  buttonStart: buttonsContainer.querySelector('#start'),
  buttonReset: buttonsContainer.querySelector('#reset'),
};

let timer;
subElements.buttonStart.addEventListener('click', () => {
  timer = setInterval(() => {
    const currentDate = new Date();
    const difference = newYearDate - currentDate;
    subElements.listMonth.innerHTML = Math.floor(
      (difference / (1000 * 60 * 60 * 24 * 30)) % 12
    );
    subElements.listDay.innerHTML = Math.floor(
      (difference / (1000 * 60 * 60 * 24)) % 30
    );
    subElements.listHours.innerHTML = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );
    subElements.listMinuts.innerHTML = Math.floor(
      (difference / (1000 * 60)) % 60
    );
    subElements.listSeconds.innerHTML = Math.floor((difference / 1000) % 60);
  }, 1000);
});

subElements.buttonReset.addEventListener('click', evt => {
  if (evt) {
    clearInterval(timer);
    subElements.listMonth.innerHTML = 0;
    subElements.listDay.innerHTML = 0;
    subElements.listHours.innerHTML = 0;
    subElements.listMinuts.innerHTML = 0;
    subElements.listSeconds.innerHTML = 0;
  }
});
