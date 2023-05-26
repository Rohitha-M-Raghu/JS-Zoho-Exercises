// Write a Javascript program counter (increment, decrement, reset option) with an object.

const counter = {
  value: 0,

  increment() {
    this.value++;
    return this.value;
  },

  decrement() {
    this.value--;
    return this.value;
  },

  reset() {
    this.value = 0;
    return this.value;
  }
};

// Demo:
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.reset()); // Output: 0
