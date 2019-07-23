// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c); // 1 2 3

test(); // 4 5 6

console.log('Global Scope: ', a, b, c); // 1 2 3

if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('Block Scope: ', a, b, c); // 7 8 9
}

console.log('Global Scope: ', a, b, c); // 7 2 3

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c); // 7 2 3

// it will override the global scope
for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c); // 10 2 3
