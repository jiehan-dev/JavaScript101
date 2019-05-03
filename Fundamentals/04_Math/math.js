const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 & num2;

val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.5);
val = Math.sqrt(64);
val = Math.abs(-50);
val = Math.pow(8, 2);
val = Math.min(10, 15, 35, 1);
val = Math.max(10, 15, 35, 1);
val = Math.random();

// Standard way to create random number
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
