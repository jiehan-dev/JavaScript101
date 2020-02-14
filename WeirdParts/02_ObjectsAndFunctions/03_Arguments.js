function greet(firstname, lastname, language, smile = true, ...extra) {
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('----------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(smile);
  console.log('arguments', arguments);
  console.log('extra', extra);
  console.log('----------');
  // array-like, acts like an array, looks like an array, but not an actual array
  // does not have features of array
}

greet();
greet('John', 'Doe', 'zh', false, 123, 'Hello World');
