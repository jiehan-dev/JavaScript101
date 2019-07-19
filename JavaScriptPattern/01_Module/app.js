// Basic structure

(() => {
  // Declare private vars and functions

  return {
    // return public var and functions
  };
})();

// STANDARD MODULE PATTERN
const UICtrl = (() => {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
    }
  };
})();

UICtrl.callChangeText();

// REVEALING MODULE PATTERN, basically means that revealing the methods to external
const ItemCtrl = (() => {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added......');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(1));
