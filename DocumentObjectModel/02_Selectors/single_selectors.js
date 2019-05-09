// Single Element Selectors

// document.getElementById()
let val;

val = document.getElementById('task-title');
val = document.getElementById('task-title').id;

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Red Tasks</span>';

// document.querySelector()
val = document.querySelector('#task-title'); // select the first id
val = document.querySelector('.card-title'); // select the first css class
val = document.querySelector('h5'); // select the first element

val = document.querySelector('li').style.color = 'red';
val = document.querySelector('ul li').style.color = 'blue';

val = document.querySelector('li:last-child').style.color = 'green'; // use CSS pseudo class
val = document.querySelector('li:nth-child(3)').style.color = 'yellow';
val = document.querySelector('li:nth-child(4)').textContent = 'Number 4';
val = document.querySelector('li:nth-child(odd)').style.background = '#ccc';

console.log(val);
