// Object.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

const john = new Person('John', 'Doe', '10-25-92');
const mary = new Person('Mary', 'Johnson', '4-7-94');

console.log(mary);

// add common funtion into prototype
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

mary.getsMarried('Smith');

// can directly access to object prototype
console.log(mary.hasOwnProperty('firstName'));
