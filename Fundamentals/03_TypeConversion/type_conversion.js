let val;

// Number to string
val = String(5);
val = String(4 + 4);

// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100.30');
val = parseFloat('100.30');

// the above is type conversion

console.log(val);
console.log(typeof val);
// console.log(val.length); //  only works for string
console.log(val.toFixed()); // only for number

const val1 = 5;
const val2 = 6;
const sum = val1 + val2; // type coercion 

console.log(sum);
console.log(typeof sum);
