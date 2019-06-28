const user = { email: '123@gmail.com' };

try {
  // Produce a ReferenceError
  //   myFunction();

  // Produce a TypeError
  //   null.myFunction();

  if (!user.name) {
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(e);
  //   console.log(e.name);
  //   console.log(e.message);
  console.log(e instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues...');
