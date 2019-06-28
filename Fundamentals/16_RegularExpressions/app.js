let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // global search

// console.log(re); // '/hello/'
// console.log(re.source); // 'hello'

// exec() - Return result in an array or null
const execResult = re.exec('brad hello world hello');

// console.log(execResult);
// console.log(execResult[0]);
// console.log(execResult.index);
// console.log(execResult.input);

// test() - Returns true or false
const testResult = re.test('Hello');
// console.log(testResult);

// match() - Return result array or null
const str = 'Hello There';
const matchResult = str.match(re);
// console.log(matchResult);

// search() - Returns index of the first match if not found returns -1
const searchResult = str.search(re);
console.log(searchResult);

// replace() - Return new string with some or all matches of a pattern
const replaceInput = 'Hello There';
const newStr = str.replaceInput(re, 'Hi');
console.log(newStr);
