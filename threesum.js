/**
 * Function threeSum() is called on a sorted array and we hold the first element
 * in place, with two pointers starting from left (ahead of the first) and
 * one from right and use the same logic to round in on the sum that is
 * equal to the one we are given
 * @param {int[]} nums
 */
function threeSum(nums) {
  // First we will sort the nums to make it easier to
  nums.sort((a, b) => a - b);
  const group = new Set();
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        const groupKey = [nums[i], nums[left], nums[right]]
          .sort((a, b) => a - b)
          .join(",");

        if (!group.has(groupKey)) {
          result.push([nums[i], nums[left], nums[right]]);
          group.add(groupKey);
        }
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(result);
}

threeSum([0, 0, 0, 0]);
