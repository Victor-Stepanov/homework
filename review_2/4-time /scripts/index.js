'use strict'
const NEW_YEAR_DATE = '01/01/2024';
//DOM
const listContainer = document.querySelector('.list');
const listMonth = listContainer.querySelector('#month');
const listDay = listContainer.querySelector('#day');
const listHours = listContainer.querySelector('#hours');
const listMinuts = listContainer.querySelector('#minutes');
const listSeconds = listContainer.querySelector('#seconds');
const buttonsContainer = document.querySelector('.buttons');
const buttonStart = buttonsContainer.querySelector('#start');
const buttonReset = buttonsContainer.querySelector('#reset');

const newYearDate = new Date(NEW_YEAR_DATE);

let timer;
buttonStart.addEventListener('click', () => {
    timer = setInterval(() => {
        const currentDate = new Date();
        const difference = newYearDate - currentDate;
        listMonth.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24 * 30) % 12)
        listDay.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24) % 30)
        listHours.innerHTML = Math.floor((difference / (1000 * 60 * 60)) % 24)
        listMinuts.innerHTML = Math.floor((difference / (1000 * 60)) % 60)
        listSeconds.innerHTML = Math.floor((difference / 1000) % 60)
    }, 1000)
})

buttonReset.addEventListener('click', (evt) => {
    if (evt) {
        clearInterval(timer)
        listMonth.innerHTML = 0;
        listDay.innerHTML = 0
        listHours.innerHTML = 0
        listMinuts.innerHTML = 0
        listSeconds.innerHTML = 0

    }
})