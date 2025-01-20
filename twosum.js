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
 * This is the Hash enhanced function which basically tries
 * to find the complement for the sum and the current index. We
 * store the values in the array we have already checked in a seen Set,
 * that helps us keep track of what numbers we have already passed and
 * go forward and only look for the complement that exists in the Set.
 * @param {int[]} array The array to be passed.
 * @param {int} target The sum value to look for.
 */
function hashTwoSum(array, target) {
  let seen = new Set();
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    if (seen.has(complement)) {
      console.log(`${complement} + ${array[i]}`);
    }

    seen.add(array[i]);
  }

  console.log(seen);
}

hashTwoSum(array, target);
