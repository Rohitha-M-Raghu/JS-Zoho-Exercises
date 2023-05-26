// Find the word in the array by given the input and return the matches value as list

function findMatches(input, array) {
  const matches = array.filter(item => item.includes(input));
  return matches;
}

// Demo:
const words = ['apple', 'banana', 'grape', 'orange', 'peach'];
const searchInput = 'ap';
const matchingWords = findMatches(searchInput, words);
console.log(matchingWords); // Output: ['apple', 'grape']
