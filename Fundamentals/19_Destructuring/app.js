// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
};

// Old Es5
const name = person.name,
  age = person.age,
  city = person.city;

// New Es6 Destructuring
const { name, age, city } = person;
