// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // Inheritance

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}
     welcome to our company`;
};

// using Object.create()
const dragonPrototypes = {
  makeSound: function() {
    return `${this.sound}... ${this.sound}... ${this.sound}...`;
  },
  levelUp: function() {
    this.level += this.level;
  }
};

const corgi = Object.create(dragonPrototypes);
corgi.sound = 'RAWR';
corgi.level = 1;

console.log(corgi.makeSound());

const pumpkin = Object.create(dragonPrototypes, {
  sound: { value: 'Oiik' },
  level: { value: 5 }
});

console.log(pumpkin);
console.log(pumpkin.makeSound());
