// Write a Javascript function to insert a string within a string at a particular position (default is 1 ).

function insertString(originalString, stringToInsert, position = 1) {
  // Check if the position is out of range
  if (position < 1 || position > originalString.length + 1) {
    console.log('Invalid position');
    return originalString;
  }
  
  // Split the original string into two parts at the specified position
  const firstPart = originalString.slice(0, position - 1);
  const secondPart = originalString.slice(position - 1);
  
  // Combine the first part, string to insert, and the second part
  const modifiedString = firstPart + stringToInsert + secondPart;
  
  return modifiedString;
}

// Demo:
const originalString = 'Hello World';
const stringToInsert = 'beautiful ';
const modifiedString = insertString(originalString, stringToInsert, 7);
console.log(modifiedString);
