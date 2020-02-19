const numbers = [10, 4, 8, 2, 6];
const students = [
  { firstname: 'John', lastname: 'Doe', age: 25 },
  { firstname: 'Steven', lastname: 'Bob', age: 34 },
  { firstname: 'Roshan', lastname: 'Porter', age: 15 },
  { firstname: 'Linus', lastname: 'Ang', age: 42 },
  { firstname: 'Shiming', lastname: 'Wu', age: 21 },
  { firstname: 'Benny', lastname: 'Tan', age: 31 }
];

// every() - Returns true if every element in this array satisfies the provided testing function
console.log(
  'every: ',
  numbers.every((val) => val % 2 === 0)
);

// some() - Returns true if at least one element in this array satisfies the provided testing function.
console.log(
  'some: ',
  numbers.some((val) => val % 3 === 0)
);

// filter - Creates a new array with all of the elements of this array for which the provided filtering function returns true.
// map - Creates a new array with the results of calling a provided function on every element in this array.
const youngsters = students
  .filter((s) => s.age < 30)
  .map((s) => {
    return {
      firstname: s.firstname,
      lastname: s.lastname,
      age: s.age
    };
  })
  .sort((s1, s2) => s1.age - s2.age);

youngsters.forEach((y) => (y.lastname = 'New'));

console.log('Youngster:');
console.table(youngsters);

console.log('Students:');
console.table(students);

// reduce - Applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
const formattedOutput = students
  .map((s) => s.firstname + ' ' + s.lastname)
  .reduce((a, b) => `${a}, ${b}`);

console.log(formattedOutput);

// find - Iterate through an array and get the first element back that causes the given callback function to return true.
// Once an element has been found, the function immediately returns.

let benny = students.find((s) => s.firstname.toUpperCase() === 'BENNY');
let ghost = students.find((s) => s.firstname.toUpperCase() === 'UNKNOWN');
console.assert(benny);
console.assert(ghost === undefined);

// findIndex - Returns the index of first matching element
const index = students.findIndex((s) => s.age > 40);
console.log(index);

// entries -  function that returns an Array Iterator that can be used to loop through the array’s keys and values
let iterator = numbers.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

