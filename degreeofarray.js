/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const setmap = {};
  const firstOccurrence = {};
  const lastOccurrence = {};
  let degree = 0;
  nums.forEach((v, i) => {
    setmap[v] = (setmap[v] || 0) + 1;

    degree = Math.max(degree, setmap[v]);
    if (firstOccurrence[v] === undefined) {
      firstOccurrence[v] = i;
    }

    lastOccurrence[v] = i;
  });
  let minLength = Infinity;

  Object.keys(setmap).forEach((v) => {
    if (setmap[v] === degree) {
      let length = lastOccurrence[v] - firstOccurrence[v] + 1;

      minLength = Math.min(minLength, length);
    }
  });

  console.log(minLength);
};

findShortestSubArray([1, 3, 2, 2, 3, 1]);
