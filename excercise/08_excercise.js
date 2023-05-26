// Write a Javascript program to check whether the key is present or not in the object.

function hasKey(obj, key) {
  return key in obj;
}

// Example usage:
const person = {
  id: 1,
  name: 'John Doe',
  age: 30,
  occupation: 'Engineer'
};

console.log(hasKey(person, 'name')); // Output: true
console.log(hasKey(person, 'address')); // Output: false
