// for concatenation of multiple strings
function concatenateStrings(...strings) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
  }
  return result;
}

//for slicing string to substrings using delimiter
function splitString(string, delimiter) {
  const result = [];
  let startIndex = 0;
  let delimiterIndex = findDelimiterIndex(string, delimiter);
  
  while (delimiterIndex !== -1) {
    result.push(getSubstring(string, startIndex, delimiterIndex));
    startIndex = delimiterIndex + delimiter.length;
    delimiterIndex = findDelimiterIndex(string, delimiter, startIndex);
  }
  
  let remainingString = getSubstring(string, startIndex);
  if(remainingString !== ''){
    result.push(getSubstring(string, startIndex));
  }
  // result.push(getSubstring(string, startIndex));
  return result;
}

// to find the index of a delimiter within a string
function findDelimiterIndex(string, delimiter, startIndex = 0) {
  const delimiterLength = delimiter.length;
  const stringLength = string.length;

  for (let i = startIndex; i <= stringLength - delimiterLength; i++) {
    let foundDelimiter = true;

    for (let j = 0; j < delimiterLength; j++) {
      if (string[i + j] !== delimiter[j]) {
        foundDelimiter = false;
        break;
      }
    }

    if (foundDelimiter) {
      return i;
    }
  }

  return -1;
}

// to get a substring from a string 
function getSubstring(string, startIndex, endIndex = string.length) {
  let substring = "";
  
  for (let i = startIndex; i < endIndex; i++) {
    substring += string[i];
  }
  
  return substring;
}


//Demo concatenation
const concatenatedString = concatenateStrings('Hello', ' ', 'World');
console.log(concatenatedString);
//const splitArray = splitString(concatenatedString, ' ');
const splitArray = splitString('HeeHeeHee', 'ee');
console.log(splitArray);

