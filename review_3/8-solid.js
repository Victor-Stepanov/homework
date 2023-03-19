class Billing {
  #_amount;
  constructor(amount) {
    this.#amount = amount;
  }
  set #amount(item) {
    this.#_amount = item;
  }
  get #amount() {
    return this.#_amount;
  }

  calculateTotal() {
    return this.#_amount;
  }
}

class FixBilling extends Billing {
  calculateTotal() {
    return super.calculateTotal();
  }
}

class HourBilling extends Billing {
  #_hours;
  constructor(amount, hours) {
    super(amount);
    this.#hours = hours;
  }
  set #hours(item) {
    this.#_hours = item;
  }
  get #hours() {
    return this.#_hours;
  }
  calculateTotal() {
    return super.calculateTotal() * this.#hours;
  }
}

class ItemBilling extends Billing {
  #_items;
  constructor(amount, items) {
    super(amount);
    this.#items = items;
  }
  set #items(item) {
    this.#_items = item;
  }
  get #items() {
    return this.#_items;
  }
  calculateTotal() {
    return super.calculateTotal() * this.#items;
  }
}
