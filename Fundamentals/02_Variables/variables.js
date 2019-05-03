// var, let, const

// Init var
var greeting;
console.log(greeting); // undefined
greeting = 'Hello';
console.log(greeting);

// const
const name = 'John';
console.log(name);
// Cannot reassign
// name = 'Sara'; // Error
// Have to assign a value
// const gretting; // Error

// we can modify the value within the object but not reassign the object
const person = { name: 'John', age: 30 };

person.name = 'Sara';

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);
