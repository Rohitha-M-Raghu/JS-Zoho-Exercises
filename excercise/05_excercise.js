// Find if the element has present in the array.

function isInArray(element, array) {
  return array.includes(element);
}

// Demo:
const numbers = [1, 2, 3, 4, 5];
console.log(isInArray(3, numbers)); // Output: true
console.log(isInArray(6, numbers)); // Output: false

const names = ['Alice', 'Bob', 'Charlie'];
console.log(isInArray('Bob', names)); // Output: true
console.log(isInArray('Dave', names)); // Output: false
