function Person(firstname, lastname) {
  console.log(this); // empty object

  this.firstname = firstname;
  this.lastname = lastname;

  console.log('This function is invoked.');

  //   return { greeting: 'i got in the way' }; // this line will replace the Person object instead
}

//NOTES: the prototype property on a function is not the prototype of the function.
// It is the prototype of any objects created if you're using the function as function constructor
Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
};

// when 'new' is executed, a empty object is created, then the 'Person' function is invoked
// the js engine change 'this' to reference the empty object when we use 'new'
// as long as the function doesn't return anything, js engine will return the newly created object
let john = new Person('John', 'Doe');
console.log(john);

Person.prototype.getFormalFullName = function() {
  return this.lastname + ' ' + this.firstname;
};

// it works, even if the function is added after john is created
console.log(john.getFormalFullName());

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
};

console.log('John'.isLengthGreaterThan(3));
// when we created a string type and going to use some undefined functions, JS engine will convert it to object.
// new String('John').isLengthGreateThan(3);
