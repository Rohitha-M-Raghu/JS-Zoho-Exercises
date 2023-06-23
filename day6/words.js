function numberToWords(number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if(number < 20) {
    return units[number];
  } 
  else if (number < 100) {
    const ten = Math.floor(number / 10);
    const unit = number % 10;
    return tens[ten] + (unit !== 0 ? ' ' + numberToWords(unit): '');
  }
  else if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const remaining = number % 100;
    return units[hundred] + ' hundred and' + (remaining !== 0 ? ' ' + numberToWords(remaining): ''); 
  }
  else if (number < 10000) {
    const thousand = Math.floor(number / 1000);
    const remaining = number % 1000;
    return units[thousand] + ' thousand' + (remaining !== 0 ? ' ' + numberToWords(remaining): '');
  }
  else {
    return 'Number out of Range';
  }
};

function displayWords(num) {
  console.log(`${num} in words is: ` + numberToWords(num));
}

// Demo:
let testNumber = 4;
displayWords(testNumber);
testNumber = 56;
displayWords(testNumber);
testNumber = 997;
displayWords(testNumber);
testNumber = 1234;
displayWords(testNumber);
testNumber = 12345;
displayWords(testNumber);