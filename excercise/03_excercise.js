// Write a Javascript function to repeat a string a specified times.
function repeatString(string, times) {
  if (typeof string !== 'string') {
    return 'Invalid input';
  }

  if (typeof times !== 'number' || isNaN(times) || times < 0) {
    return 'Invalid number of times';
  }

  let repeatedString = '';
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

// Demo:
console.log(repeatString('Hello', 3)); // Output: 'HelloHelloHello'
console.log(repeatString('OpenAI', 5)); // Output: 'OpenAIOpenAIOpenAIOpenAIOpenAI'
console
