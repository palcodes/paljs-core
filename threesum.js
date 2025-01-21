/**
 * Function threeSum() on a sorted array and we hold the first element
 * in place, with two pointers starting from left (ahead of the first) and
 * one from right and use the same logic to round in on the sum that is
 * equal to the one we are given
 * @param {int[]} array
 * @param {int} target
 */

function threeSum(array, target) {
  array.sort((a, b) => a - b);
  const n = array.length;
  const group = new Set();
  for (let i = 0; i < n - 2; i++) {
    const first = array[i];

    let left = array[i + 1];
    let right = array[n - 1];
    let groupKey = "";
    /**
     * The requiredSum for the Left and Right can be found using
     * the complement we get from subtracting the First from the target.
     * @typedef
     */
    const requiredSum = target - first;

    while (left < right) {
      if (left + right === requiredSum && right !== left && first !== left) {
        groupKey = [first, left, right].sort((a, b) => a - b).join(",");
        if (!group.has(groupKey)) {
          console.log("Found: ", `${first} + ${left} + ${right}`);

          group.add(groupKey);
        }
        break;
      } else if (left + right < requiredSum) {
        left++;
      } else {
        right--;
      }
    }
  }
}

const array = [1, 3, -3, 1, -2, 2, -9, 4, 5, 7, 7, -9, -3, 6];
// const array = [2, 1, 5, 3];
const target = 0;

threeSum(array, target);
