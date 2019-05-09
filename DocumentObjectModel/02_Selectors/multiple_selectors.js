// Multiple Elements Selectors

const items = document.getElementsByClassName('collection-item');
console.log(items);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

let lis = document.getElementsByTagName('li');
console.log(lis);

lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach((li, index) => {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

// Return nodelist, no need to convert to array
const qItems = document.querySelectorAll('ul.collection li.collection-item');

qItems.forEach((item, index) => {
  item.textContent = `${index}: Query Selector`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(qItems);
