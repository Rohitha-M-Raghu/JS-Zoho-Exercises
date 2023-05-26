// Write a JavaScript program to construct the following pattern, using a nested for loop. 
// Sample Output:
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

function constructPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }
}

// Demo:
const numRows = 5;
constructPattern(numRows);
