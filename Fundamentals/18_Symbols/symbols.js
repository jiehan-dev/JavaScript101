// Create a symbol
// const sym1 = Symbol();
// const symb2 = Symbol('sym2');

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}:${myObj[1]}`);
}

// Symbols are ignored by JSON.Stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
