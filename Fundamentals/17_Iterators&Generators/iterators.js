// Iterator Example

function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
    }
  };
}

const namesArr = ['Jack', 'Jill', 'John'];

const names = nameIterator(namesArr);

console.log(names.next().value); // Jack
console.log(names.next().value); // Jill
console.log(names.next().value); // John
console.log(names.next().value); // Undefined
