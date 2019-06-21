// Normal Function
const sayHello = function() {
  console.log('Hello');
};

// Arrow Function
const sayHello2 = () => {
  console.log('Hello');
};

// One line function does not need braces
const sayHello3 = () => console.log('Hello');

// Have to wrap it if returning object
const getObject = () => ({ msg: 'Hello' });

// Single param does not need parenthesis
const sayHello4 = name => console.log(`Hello ${name}`);

const sayHello5 = (firstName, LastName) => console.log(`Hello ${firstName}${LastName}`);

const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(name => name.length);

