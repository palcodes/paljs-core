/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let startIndex = m;
  for (i = 0; i < n; i++) {
    nums1[startIndex] = nums2[i];
    startIndex++;
  }
  console.log(nums1.sort((a, b) => a - b));
};

let nums1 = [4, 0, 0, 0, 0, 0],
  m = 1,
  nums2 = [1, 2, 3, 5, 6],
  n = 5;

merge(nums1, m, nums2, n);
