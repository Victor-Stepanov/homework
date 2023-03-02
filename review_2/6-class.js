class Car {
    #_make;
    #_model;
    #_milage;

    constructor(make, model, milage) {
        this.#make = make;
        this.#model = model;
        this.#milage = milage;
    }
    get #make() {
        return this.#_make;
    }
    set #make(make) {
        this.#_make = make;
    }
    get #model() {
        return this.#_model;
    }
    set #model(model) {
        this.#_model = model;
    }
    get #milage() {
        return this.#_milage;
    }
    set #milage(milage) {
        this.#_milage = milage;
    }

    #checkedData() {
        if (this.#make && this.#model && this.#checkedData) {
            return true;
        }
        return false;
    }
    getInfo() {
        if (!this.#checkedData()) {
            return 'error';
        }
        return `Марка: ${this.#make} Модель: ${this.#model} Пробег: ${this.#milage
            }`;
    }
}

