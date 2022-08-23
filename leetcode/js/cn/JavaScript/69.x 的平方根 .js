// @algorithm @lc id=69 lang=javascript
// @title sqrtx

// @author Merlynr
// @test(4)=2
// @test(8)=2
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let [l, r] = [0, x],
    res = [0, 1, 1, 1];
  if (x < 4) {
    return res[x];
  }
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (mid * mid > x) {
      r = mid - 1;
    } else if (mid * mid < x) {
      res = mid;
      l = mid + 1;
    } else {
      res = mid;
      return res;
    }
  }
  return res;
};
