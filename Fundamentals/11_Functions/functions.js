// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  return 'Hello ' + firstName + ` ${lastName}`;
}

console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3) {
  return x * x;
};

console.log(square(8));

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(name) {
  console.log(`Hello ${name}`);
})('Brad');

// PROPERTY METHODS
const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
