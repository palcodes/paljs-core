// O(1) - Constant Time
function getFirstElement(arr) {
  return arr[0];
}

// O(n) - Linear Time
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(n²) - Quadratic Time
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Space Complexity Example - O(n)
function createCache(arr) {
  const cache = new Map(); // O(n) space
  arr.forEach((item, index) => {
    cache.set(item, index);
  });
  return cache;
}

// Common Frontend Operation Complexities
class UIOperations {
  // DOM Selection - O(1) for ID, O(n) for class/tag
  getElementById(id) {
    return document.getElementById(id); // O(1)
  }

  getElementsByClass(className) {
    return document.getElementsByClassName(className); // O(n)
  }

  // Array Operations
  filterElements(arr, condition) {
    return arr.filter(condition); // O(n) time, O(n) space
  }

  // String Operations
  reverseString(str) {
    return str.split("").reverse().join(""); // O(n) time, O(n) space
  }
}

// Virtual DOM Diffing Example - O(n) where n is number of nodes
function simpleDiff(oldNode, newNode) {
  const patches = [];

  if (!oldNode) {
    patches.push({ type: "CREATE", node: newNode });
  } else if (!newNode) {
    patches.push({ type: "REMOVE" });
  } else if (oldNode.type !== newNode.type) {
    patches.push({ type: "REPLACE", node: newNode });
  } else if (oldNode.props !== newNode.props) {
    patches.push({ type: "PROPS", props: newNode.props });
  }

  // Recursively diff children
  const maxLength = Math.max(
    oldNode?.children?.length || 0,
    newNode?.children?.length || 0
  );

  for (let i = 0; i < maxLength; i++) {
    patches.push(...simpleDiff(oldNode?.children?.[i], newNode?.children?.[i]));
  }

  return patches;
}
