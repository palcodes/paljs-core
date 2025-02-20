/**
 * @param {number} x
 * @return {number}
 */
var intSqrt = function (x) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return n;

  let left = 1;
  right = n;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === n) return mid;

    if (mid * mid < n) {
      left = mid + 1;
      ans = mid;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};
