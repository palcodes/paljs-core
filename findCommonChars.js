/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let charCount = new Map();
  for (const char of words[0]) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 1; i < words.length; i++) {
    let tempCount = new Map();

    for (const char of words[i]) {
      tempCount.set(char, (tempCount.get(char) || 0) + 1);
    }

    for (const key of charCount.keys()) {
      if (tempCount.has(key)) {
        charCount.set(key, Math.min(charCount.get(key), tempCount.get(key)));
      } else {
        charCount.delete(key);
      }
    }
  }
  let result = [];
  for (const [char, count] of charCount.entries()) {
    result.push(...Array(count).fill(char));
  }

  return result;
};

console.log(commonChars(["bella", "label", "roller"]));
