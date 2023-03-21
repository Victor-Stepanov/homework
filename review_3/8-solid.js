class Billing {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }

  calculateTotal() {
    return this.#amount;
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
  calculateTotal() {
    return super.calculateTotal();
  }
}

class HourBilling extends Billing {
  #hours;
  constructor(amount, hours) {
    super(amount);
    this.#hours = hours;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#hours;
  }
}

class ItemBilling extends Billing {
  #items;
  constructor(amount, items) {
    super(amount);
    this.#items = items;
  }
  calculateTotal() {
    return super.calculateTotal() * this.#items;
  }
}
