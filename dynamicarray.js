class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new Array(this.capacity).fill(0);
  }

  /**
   * Get the value at the ith index.
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.arr[i];
  }

  /**
   * Set a value at the i-th index.
   * @param {number} v - The value to insert.
   * @param {number} i - The index to insert the value at.
   * @returns {void}
   */
  set(v, i) {
    this.arr[i] = v;
  }

  /**
   * Insert a value in the last position of the array.
   * @param {number} v - The value to insert.
   * @returns {void}
   */
  pushback(v) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.arr[this.length] = v;
    this.length++;
  }

  /**
   * Removes the last number of the array.
   * @returns {number}
   */
  popback() {
    if (this.length > 0) {
      this.length--;
    }
    return this.arr[this.length];
  }

  /**
   * Doubles the size of the array.
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    const newArr = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  /**
   * Get the current size of the array.
   * @returns {number} - The current size.
   */
  getSize() {
    return this.length;
  }

  /**
   * Get the current capacity of the array.
   * @returns {number} - The current capacity.
   */
  getCapacity() {
    return this.capacity;
  }
}


const a = new DynamicArray(8);
a.pushback(2);
console.log(a.getSize())
console.log(a.arr);

