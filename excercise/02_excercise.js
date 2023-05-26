// Write a Javascript function to humanized number (Formats a number to a human readable string) with the correct suffix such as 1st, 2nd, 3rd, 4th.

function humanizeNumber(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'Invalid number';
  }

  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder10 = number % 10;
  const remainder100 = number % 100;

  // Check if special case for 11, 12, 13
  if (remainder10 === 1 && remainder100 !== 11) {
    return number + 'st';
  } else if (remainder10 === 2 && remainder100 !== 12) {
    return number + 'nd';
  } else if (remainder10 === 3 && remainder100 !== 13) {
    return number + 'rd';
  } else {
    return number + 'th';
  }
}

// Demo:
console.log(humanizeNumber(1)); // Output: 1st
console.log(humanizeNumber(22)); // Output: 22nd
console.log(humanizeNumber(333)); // Output: 333rd
console.log(humanizeNumber(404)); // Output: 404th
console.log(humanizeNumber(1000)); // Output: 1000th
