// @algorithm @lc id=172 lang=javascript
// @title factorial-trailing-zeroes

// @author Merlynr
// @test(3)=0
// @test(5)=1
// @test(0)=0
// @test(11)=2
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // * 只有5的倍数的阶乘，才会产生5, 所以我们需要看看阶层数有多少个5
  let res = 0;
  while (n > 1) {
    n = Math.floor(n / 5);
    res += n;
  }
  return res;
};
