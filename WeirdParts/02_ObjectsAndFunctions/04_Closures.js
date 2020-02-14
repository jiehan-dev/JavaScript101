function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  };
}

var sayHi = greet('Hi');

sayHi('Tony');
// it still have the reference of 'whattosay', even the 'greet' execution context is gone

function buildFunctions() {
  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// to overcome the above behavior
function buildFunctionsBetter() {
  let arr = [];

  // use 'let' to have the variable within the block scope
  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

var fs2 = buildFunctionsBetter();
fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2
