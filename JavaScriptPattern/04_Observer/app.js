function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);

    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function.
    // If there is no match, the callback gets to stay on the list.
    // The filter returns a new list and reassigns the list of observers
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });

    console.log(`You are now unsubscrived from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(item => item.call());
  }
};

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurrentMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
