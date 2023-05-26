const items = [
  { name: 'Bike', price: 100},
  { name: 'TV', price: 200},
  { name: 'Album', price: 10},
  { name: 'Book', price: 5},
  { name: 'Phone', price: 500},
  { name: 'Computer', price: 1000},
  { name: 'Keyboard', price: 25}
]
//filtering array using condition
const filteredItems = items.filter((item) => {
  return item.price <=100
})
console.log('Filtered items by price(<=100): ')
console.log(filteredItems)

// creating a map out of items object
const itemNames = items.map((item)=>{
  return item.name
})
console.log('New Map using Item Names: ')
console.log(itemNames)

//finding an item from items 
const foundItem = items.find((item) => {
  return item.name === 'Book'
})
console.log("Finding item with name 'Book': ")
console.log(foundItem)

// traversal using forEach
console.log('Travesing through items using forEach: ')
items.forEach((item) => {
  console.log(item.name)
});

// checks whether such an element is present and returns boolean
let hasInexpensiveItems = items.some((item) => {
  return item.price <= 100
})
console.log('Use of some function: ')
console.log(hasInexpensiveItems)

//checks for every item and returns boolean
hasInexpensiveItems = items.every((item) => {
  return item.price <= 100
})
console.log('Use of every function: ')
console.log(hasInexpensiveItems)

// summing all the prices in the items object
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)
console.log('Total price: ')
console.log(total)

// to check if that element is present
const numbers = [1, 2, 3, 4, 5]

let includesTwo = items.includes(2) // false
includesTwo = numbers.includes(2)

console.log('Checking element \'2\' using includes: ')
console.log(includesTwo)