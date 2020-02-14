// long running function
function waitThreeSeconds() {
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

// any asynchoronous events that happen outside of the js engine (user input/http calls)
// get placed into to the event queue. If the execution stack is empty, js engine will then process those events.