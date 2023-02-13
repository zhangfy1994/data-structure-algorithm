Array.prototype.binarySearch = function (item) {
  let start = 0;
  let end = this.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (this[mid] > item) {
      end = mid - 1;
    } else if (this[mid] < item) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

const now = Date.now();
console.log([1, 2, 3, 4].binarySearch(0));

console.log("time: ", Date.now() - now);
