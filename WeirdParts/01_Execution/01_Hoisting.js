b(); // execute successfully

console.log(a); // print 'undefined'

var a = 'Hello World!'; // without this line, console.log(a) above will throw error

function b() {
  console.log('Called b!');
}

// Execution Context is created in two phases

// CREATION PHASE
// Global Object + 'this' + Outer Environment
// Setup memory space for variables and functions ('Hoisting'), and leave it as undefined for variable

// Assignment is done at execution phase

// EXECUTION PHASE
// Simply run our code line by line