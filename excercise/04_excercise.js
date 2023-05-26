// Write a Javascript function to check whether an `input` is an array or not.

function isArray(input) {
  return Array.isArray(input);
}

// Demo:
console.log(isArray([1, 2, 3])); // Output: true
console.log(isArray('Hello')); // Output: false
console.log(isArray({ a: 1, b: 2 })); // Output: false
console.log(isArray(123)); // Output: false
