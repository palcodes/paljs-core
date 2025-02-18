/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      seen.set(nums[i], i);
    } else {
      const prevIndex = seen.get(nums[i]);
      if (Math.abs(prevIndex - i) <= k) {
        return true;
      } else {
        seen.set(nums[i], i);
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
