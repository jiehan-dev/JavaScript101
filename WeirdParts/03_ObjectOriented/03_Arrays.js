Array.prototype.myCustomFeature = 'cool!';

let arr = ['John', 'Jane', 'Jim'];
for (const prop in arr) {
  console.log(`${prop}: ${arr[prop]}`);
  // 0: John
  // 1: Jane
  // 2: Jim
  // myCustomFeature: cool!
}

// Iterating over all properties is not safe, because arrays are objects and you could iterate down into the prototype.
