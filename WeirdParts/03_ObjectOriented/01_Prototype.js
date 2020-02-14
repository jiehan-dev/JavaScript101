let person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

let john = {
  firstname: 'John',
  lastname: 'Doe'
};

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName()); // 'John Doe"
console.log(john.firstname); // 'John', not default because john has 'firstname' property, so prototype chain stop there

let jane = {
  firstname: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName()); // 'Jane Default'

// each object, function, array have prototype