// 'use strict';

function logNewPerson() {
  'use strict'; // can be declard within function or top of file

  let person2;
  persom2 = {}; // Uncaught ReferenceError: persom2 is not defined
  console.log(persom2); 
}

let person;

persom = {};

console.log(persom);
logNewPerson();
