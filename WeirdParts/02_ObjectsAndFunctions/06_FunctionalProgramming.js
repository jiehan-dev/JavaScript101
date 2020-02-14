let arr1 = [1, 2, 3];
console.log(arr1);

function mapForEach(arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
}

let arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});

let checkPastLimit = function(limiter, item) {
  return item > limiter;
};

let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

let checkPastLimitSimplified = function(limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

let arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
