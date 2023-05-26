var person = {
  _id: 1,
  name: 'Leela'
}

console.log(person.id)

person.id = 4
// we are able to change the property 
console.log(person.id)

Object.defineProperty(person, 'id', {
  value: 1,
  writable: false
});


console.log('Before changing value...');
console.log(person.id);
person.id = 4;
console.log('After changing value...');
console.log(person.id);

Object.defineProperty(person, 'id', {
  get: function() {
    return "id is " + this._id;
  },
  set: function(id) {
    this._id = id
  }
})

console.log(person.id);

