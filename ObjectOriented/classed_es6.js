// Classes in JS is just syntactic sugar, it doesn't change how it works under the hood

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  // will be added to the prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Static method calls are made directly on the class and are not callable on instances of the class. Static methods are often used to create utility functions.
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

console.log(mary);
console.log(mary.calculateAge());
mary.getsMarried('Thompson');
console.log(mary);

console.log(Person.addNumbers(1, 2));

// Sets the Prototype(__proto__)
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '123-123-123', 'Premium');

console.log(john);
console.log(Customer.addNumbers(10, 10));
console.log(Customer.getMembershipCost());
