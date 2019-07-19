// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'JohN' });
set1.add(true);
set1.add(100); // not being added as it is not unique

const set2 = new Set([1, true, 'string']);

// Get count
console.log(set1.size);
// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // true
console.log(set1.has({ name: 'John' })); // false

// Delete from set
set1.delete(100);

// Iterating through sets
for (let item of set1) {
  console.log(item);
}

set1.forEach(value => {
  console.log(value);
});

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);
