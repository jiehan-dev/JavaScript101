// Polyfill
// If the older browser doesn't support Object.create()

if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation only accepts the first parameter');
    }
    // use function construction
    function F() {}
    F.prototype = o;
    return new F();
  };
}

// One way to create object: Object.create()
// Pure prototypal inheritance
let person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return `Hi ${this.firstname}`;
  }
};

let john = Object.create(person); // it will create an empty object with the person as prototype

console.log(john.__proto__.firstname); // output: Default

john.firstname = 'John';
john.lastname = 'Doe';

console.log(john.greet()); // Hi John // the prototype chain found 'firstname' at the object level

person.intro = function() {
  return `My name is ${this.firstname} ${this.lastname}`;
};

console.log(john.intro()); // My name is John Doe
