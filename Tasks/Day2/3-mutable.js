'use strict';

// Rewrite previous example from OOP with mutable state
// to FP using closure-based syntax, mutable instance, method chaining

class Adder {
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

const createAdder = (initialValue) => {
  return {
    add (value) {
      initialValue += value;
      return this;
    },
    valueOf() {
      return initialValue;
    }
  }
}

const sum1 = new Adder(1).add(9).add(1).add(7);
const sum2 = createAdder(1).add(9).add(1).add(7);
console.log('Sum1:', +sum1);
console.log('Sum2:', +sum2);
