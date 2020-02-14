console.log(this); // window object

//function statement
function a() {
  console.log('a', this);
  this.newvariable = 'hello world'; // being added to the global namespace
}

//function expression
var b = function() {
  console.log('b', this);
};

a(); // window object

console.log(newvariable);

b(); // window object

let c = {
  name: 'The c object',
  log: function() {
    let self = this;
    this.name = 'Updated c object';
    console.log(this); // this refer to the c object

    let setname = function(newname) {
      this.name = newname; // this refer to the global window object
      // instead of setting it to the c object name, it set at window object

      // use the following reference instead
      self.name = newname;
    };

    setname('Updated again! The c object');

    console.log(this);
  }
};

c.log();
