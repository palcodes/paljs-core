/**
 * Find the two sum sub-arrays from an integer array
 *
 * This is the brute-force way of solving this problem statement
 * where you loop through each time for each k and k + 1 you want
 * to check the sum of.
 */
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(`${array[i]} ${array[j]}`);
      } else {
        continue;
      }
    }
  }
}

const array = [1, 3, -3, 1, -2, 2, -9, 4, 5, 7, 7];
// const array = [2, 1, 5, 3];
const target = 4;
// twoSum(array, target);

/**
 * This is the Hash enhanced TwoSum function which basically tries
 * to find the complement for the sum and the current index. We
 * store the values in the array we have already checked in a seen Set,
 * that helps us keep track of what numbers we have already passed and
 * go forward and only look for the complement that exists in the Set.
 * @param {int[]} array The array to be passed.
 * @param {int} target The sum value to look for.
 */
function hashTwoSum(array, target) {
  const seen = new Set();
  const usedPairs = new Set();
  const results = [];

  for (let num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
      const pairKey = [num, complement].sort((a, b) => a - b).join(",");

      if (!usedPairs.has(pairKey)) {
        results.push([num, complement]);
        usedPairs.add(pairKey);
        console.log(`${num} + ${complement}`);
      }
    }

    seen.add(num);
  }
}

// hashTwoSum(array, target);

/**
 * Function hashSortedArray() is the twosum function for the
 * sorted array which uses two pointer method, where we have a
 * left and right pointer closing into the middle from both sides.
 * @param {int[]} array The array to be passed.
 * @param {int} target The sum value to look for.
 */
function hashSortedTwoSum(array, target) {
  const sorted = array.sort((a, b) => a - b);
  const length = array.length;

  let left = 0;
  right = length - 1;

  while (left < right) {
    const con = sorted[left] + sorted[right];
    if (con === target) {
      console.log(`Found: ${sorted[left]} + ${sorted[right]}`);
      return;
    } else if (con < target) {
      left++;
    } else {
      right--;
    }
  }
}

hashSortedTwoSum(array, target);
