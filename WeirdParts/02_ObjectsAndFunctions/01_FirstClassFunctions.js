// FIRST CLASS FUNCTIONS
// Everything you can do with other types, you can do with functions.
// Assign them to variables, pass them around, create them on the fly.

// Function is a special type of object
// Function Statement
function greet() {
  // CODE property of function 'greet', invocable
  console.log('hi');
}
// The above code declare the function itself


// attach a property to a function
greet.language = 'english';

// EXPRESSION
// A unit of code that results in a value. (It doesn't have to save to a variable)

var annonymousGreet = function() {
  console.log('hi');
};
// The above code, create and return an anonymous object and assign to the variable at the execution phase