/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let flattenedArr = [];

  const helper = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        helper(arr[i], depth - 1);
      } else {
        flattenedArr.push(arr[i]);
      }
    }
  };

  helper(arr, n);
  return flattenedArr;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
