/**
 *
 * We are looking at some computations that are being repeated.
 * For each row, there will one extra element added.
 * The new elements are in the middle, which have a summation of the
 * two above.
 * The simple logic should be that I am walking through each element and
 * for each element, I am looking at the previous array's elements two indices
 * back and adding them. If there exist, two elements sum and add to current array,
 * or don't.
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [];
  for (let i = 0; i < numRows; i++) {
    let row = [1];
    let val = 1;

    for (let j = 1; j <= i; j++) {
      val = (val * (i - j + 1)) / j;
      row.push(val);
    }
    triangle.push(row);
  }

  console.log(triangle);
};

generate(5);
