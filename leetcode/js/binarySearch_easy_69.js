/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1 || x === 0) {
    return x;
  }
  let l = 0,
    r = x;
  while (l < r) {
    let mid = Math.floor((l + r) >> 1); //2
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l - 1;
};

console.log(mySqrt(8));
