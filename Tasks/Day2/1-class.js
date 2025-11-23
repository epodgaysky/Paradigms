'use strict';

// Rewrite from OOP with mutable state
// to FP using class-based syntax, immutable instance, method chaining

class AdderClass {
  constructor(initial) {
    this.value = initial;
  }

  add(x) {
    this.value += x;
    return this;
  }

  valueOf() {
    return this.value;
  }
}

class AdderFunc {
  #value = NaN;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  static create(initialValue) {
    return new AdderFunc(initialValue);
  }

  add(value) {
    return new AdderFunc(this.#value + value);
  }

  valueOf() {
    return this.#value;
  }
}

const sum1class = new AdderClass(1).add(9).add(1).add(7);
const sum1func = AdderFunc.create(1).add(9).add(1).add(7);
console.log('sum1class:', +sum1class);
console.log('sum1func:', +sum1func);
