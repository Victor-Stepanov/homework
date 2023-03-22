class Car {
  #make;
  #model;
  #milage;

  constructor(make, model, milage) {
    this.#make = make;
    this.#model = model;
    this.#milage = milage;
  }

  get milage() {
    return this.#milage;
  }

  set changeMilage(value) {
    this.#milage = value;
  }

  #checkedData() {
    if (this.#make && this.#model && this.milage) {
      return true;
    }
    return false;
  }
  getInfo() {
    if (!this.#checkedData()) {
      return 'error';
    }
    return `Марка: ${this.#make} Модель: ${this.#model} Пробег: ${this.milage}`;
  }
}

const car = new Car('Tesla', 'Model3', '35000');
console.log(car.getInfo());
car.changeMilage = '135000'; // change milage
console.log(car.getInfo());
