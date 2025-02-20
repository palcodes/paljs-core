/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const words = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = Array(...words)
    .reverse()
    .join("");

  return words === reversed;
};

console.log(isPalindrome("race a car"));
