/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let holdValue = n;
  return function () {
    return holdValue++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
