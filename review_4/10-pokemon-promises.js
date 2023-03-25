'use strict';

function getPokemonData(url, method = "GET") {
    return fetch(url, {
        method
    })
        .then(responce => {
            if (!responce.ok) {
                return Promise.reject(responce.status)
            }
            return responce.json()
        })
}

getPokemonData('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(({ abilities }) => {
        const { url } = abilities[0]?.ability;
        return getPokemonData(url);
    })
    .then(({ effect_entries }) => {
        const en = effect_entries.find(({ language }) => language.name === 'en')
        console.log(en)
    })
    .catch(error => {
        console.log(`При получении данных произошла ошибка:${error}`)
    })