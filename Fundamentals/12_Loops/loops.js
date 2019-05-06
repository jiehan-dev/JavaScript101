for (let i = 0, j = 10; i < 10 && j > 0; i++, j--) {
  if (i === 5) {
    console.log('5 is my favourite number');
    continue;
  }

  if (j === 3) {
    console.log('Stop the loop');
  }

  console.log(`i: ${i}, j: ${j}`);
}

let i = 0;

while (i < 10) {
  console.log(`number ` + i);
  i++;
}

do {
  console.log('Number ' + i);
  i--;
} while (i > 0);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car, index, array) {
  console.log(`${index}: ${car}`);
  console.log(array);
});

// MAP
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Benny' },
  { id: 3, name: 'Linus' },
  { id: 4, name: 'Albert' }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
