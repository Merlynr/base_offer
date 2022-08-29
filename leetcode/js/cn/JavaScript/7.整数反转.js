// @algorithm @lc id=7 lang=javascript
// @title reverse-integer

// @author Merlynr
// @test(123)=321
// @test(-123)=-321
// @test(120)=21
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
    x = (x / 10) | 0;
  }
  return res;
};
