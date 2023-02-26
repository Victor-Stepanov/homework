'use strict'
const {log} = console;
const birthdayDate = '2022-01-01';

function getYears(firstDate, secondDate) {
    return Math.floor(((secondDate - firstDate) / (1000 * 60 * 60 * 24) / 365))

}

function checkAge(date) {
    const dateNow = new Date();
    const checkDate = new Date(date);
    const result = getYears(checkDate, dateNow)
    return result > 14;
}


