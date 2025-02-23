/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    key = fn(this[i]);
    if (obj[key]) {
      obj[key].push(this[i]);
    } else {
      obj[key] = [this[i]];
    }
  }

  console.log(obj);
};

[{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
  return item.id;
});
