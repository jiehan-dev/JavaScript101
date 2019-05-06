const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'something@somewhere.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [{ name: 'John', age: 30 }, { name: 'Mike', age: 23 }];

