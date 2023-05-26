// Write a Javascript program to list the properties of a Javascript object.

function listProperties(obj) {
  const properties = Object.keys(obj);
  return properties;
}

// Demo:
const person = {
  id: 1,
  name: 'John Doe',
  age: 30,
  occupation: 'Engineer'
};

const propertyList = listProperties(person);
console.log(propertyList); // Output: ['id', 'name', 'age', 'occupation']
