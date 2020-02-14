let person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

let logName = function(lang1, lang2) {
  // By default, 'this' is reference to the global object, the 'getFullName' would be undefined
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------');
};

// create a copy that bind the person object as 'this' for logName
let logPersonName = logName.bind(person);

logPersonName();

// instead of creating a copy, execute it
logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']); // similar to call but it expect array of arguments

// use case: function borrowing

let person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// function currying
// Creating a copy of a function but with some preset parameters
function multiply(a, b) {
  return a * b;
}

// the copy of funcion will permanently have first argument as 2
let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(4)); // 8
