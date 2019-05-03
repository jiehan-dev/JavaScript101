const numbers = [43, 23, 44, 12, 13, 90, 35, 1000, 2000, 3500, 9999, 123456];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = ['Hello', 22, true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(90);

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 3);
// Reverse
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting Arrays
val = fruit.sort();
val = numbers.sort(); // only sort according to the left most digit

// Use the "compare function"
val = numbers.sort(function(x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
