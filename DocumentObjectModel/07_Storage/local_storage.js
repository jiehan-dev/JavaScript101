// set local storage item

localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();

console.log(name);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});


