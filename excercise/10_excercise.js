// Write a Javascript program to add and update the array data in the object.
// Example Object: { list : [{name : "kumaresan"}, {name : "arun"}] 

const data = {
  list: [
    { name: "kumaresan" },
    { name: "arun" }
  ]
};

// Add new item to the array
const newItem = { name: "john" };
data.list.push(newItem);

// Update an item in the array
const indexToUpdate = 1; // Index of the item to update
const updatedItem = { name: "peter" };
data.list[indexToUpdate] = updatedItem;

// Print the updated data
console.log(data.list);
