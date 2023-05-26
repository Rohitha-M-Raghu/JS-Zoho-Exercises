// For
// While
// Do...While
// For...In
// For...Of

// Use of for loop
for(let i = 0; i < 5; i++) {
  console.log('Hello World ', i);
}

for(let i = 1; i <= 5; i++) {
  console.log('Hello World ', i);
}

for(let i = 1; i <= 5; i++) {
  if(i%2 != 0) console.log('Hello World ', i);
}

// switch - try in console (alert is specific to web browser)
// let browser = 'Firefox';
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// functions
function sayHi() {
  alert( "Hello" );
}

let sayHi = function() {
  alert( "Hello" );
};

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

// making a copy of function
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
