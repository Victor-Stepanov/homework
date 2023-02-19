'use strict'
const userArr = [
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    }
]

const users = new Set(userArr.map((value, _, arr) => arr.find((el) => el.id === value.id)))
const uniqUsers = [...users]
