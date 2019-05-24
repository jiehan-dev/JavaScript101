// Person constructor , ES5
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const brad = new Person('Brad', '10-25-1992');
const john = new Person('John', '10-25-1992');
console.log(brad.calculateAge());

// String
const sName1 = 'Jeff';
const sName2 = new String('Jeff'); // string as an object, is false if '===' to 'Jeff'

// Number
const num1 = 5;
const num2 = new Number(5);
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1+1');

// Object
const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
