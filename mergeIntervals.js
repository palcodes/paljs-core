/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const arr = [intervals[0]]; // Start with the first interval

  for (let i = 1; i < intervals.length; i++) {
    let last = arr[arr.length - 1]; // Get the last interval in result
    let [currStart, currEnd] = intervals[i];

    if (last[1] >= currStart) {
      // Overlapping case
      last[1] = Math.max(last[1], currEnd); // Merge by updating end
    } else {
      arr.push([currStart, currEnd]); // Non-overlapping case
    }
  }

  return arr;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [8, 9],
    [9, 11],
    [15, 18],
    [2, 4],
    [16, 17],
  ])
);
