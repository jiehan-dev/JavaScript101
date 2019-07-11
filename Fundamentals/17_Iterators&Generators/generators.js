// Generator Example

function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value); // Jack
console.log(name.next().value); // Jill
console.log(name.next().value); // John
console.log(name.next().value); // Undefined

function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
