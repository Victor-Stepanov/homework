'use strict';

const Personage = function (species, name, language) {
  this.species = species;
  this.name = name;
  this.language = language;
};

Personage.prototype.talk = function () {
  console.log(`Имя: ${this.name} язык: ${this.language}`);
};
const pers = new Personage('Человек', 'Медив', 'секретно');
pers.talk();

const Goblin = function (species, name, language, weapon = '') {
  Personage.call(this, species, name, language);
  this.weapon = weapon;
};

Goblin.prototype.hit = function () {
  console.log(`Ударил с помощью ${this.weapon}`);
};

const orc = new Goblin('Гоблин', 'Газлоу', 'секретно', 'Железная звезда');
orc.hit();

const Elf = function (species, name, language, charm = '') {
  Personage.call(this, species, name, language);
  this.charm = charm;
};

Elf.prototype.createCharm = function () {
  console.log(`Создал ${this.charm}`);
};

const elf = new Elf('секретно', 'Дат Ремар', 'секретно', 'Тайная магия');
elf.createCharm();
