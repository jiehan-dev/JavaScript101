function b() {
  console.log(myVar); // myVar is 1, because reference to outer environment
  // AKA Lexical Scoping
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

/*
THE CALL STACK

    b()
    Execution Context
        |
    a()
    Execution Context [myVar = 2]
        |
    Global Execution Context [myVar = 1]


*/
