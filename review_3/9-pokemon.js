'use strict';

const URL_HW = 'https://pokeapi.co/api/v2/pokemon/ditto';

const request = new XMLHttpRequest();
request.open('GET', `${URL_HW}`);
request.send();
request.addEventListener('load', function () {
  const { abilities } = JSON.parse(this.responseText);
  const { url } = abilities[0].ability;
  const request = new XMLHttpRequest();
  request.open('GET', `${url}`);
  request.send();
  request.addEventListener('load', function () {
    const { effect_entries } = JSON.parse(this.responseText);
    const info_EN = effect_entries.find(
      ({ language }) => language.name === 'en'
    );
    console.log(info_EN);
  });
});
