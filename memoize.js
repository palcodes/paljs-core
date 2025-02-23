/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = args.join(",");
    if (cache[key]) {
      // if (key in cache) -> another way of doing the same check.
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

let callCount = 0;
const sum = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
sum([0, 0]); // 5
sum([0, 0]); // 5
console.log(callCount); // 1
