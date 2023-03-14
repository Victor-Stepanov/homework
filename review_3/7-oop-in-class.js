class Personage {
  constructor(species, name, language) {
    this.species = species;
    this.name = name;
    this.language = language;
  }

  talk() {
    console.log(`Имя: ${this.name} язык: ${this.language}`);
  }
}

class Goblin extends Personage {
  #weapon;
  constructor(species, name, language, weapon) {
    super(species, name, language);
    this.#weapon = weapon;
  }

  hit() {
    console.log(`Ударил с помощью ${this.#weapon}`);
  }
  talk() {
    super.talk();
    console.log(`В бою использую ${this.#weapon}`);
  }
}

class Elf extends Personage {
  #charm;
  constructor(species, name, language, charm) {
    super(species, name, language);
    this.#charm = charm;
  }

  createCharm() {
    console.log(`Создал ${this.#charm}`);
  }
  talk() {
    super.talk();
    console.log(`Мое любимое заклинание это - ${this.#charm}`);
  }
}

const pers = new Personage('Человек', 'Медив', 'секретно');
const orc = new Goblin('Гоблин', 'Газлоу', 'секретно', 'Железная звезда');
const elf = new Elf('секретно', 'Дат Ремар', 'секретно', 'Тайная магия');
