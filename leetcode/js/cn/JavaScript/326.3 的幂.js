// @algorithm @lc id=326 lang=javascript
// @title power-of-three

// @author Merlynr
// @test(27)=true
// @test(0)=false
// @test(9)=true
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n >= 3) {
    n /= 3;
  }
  return n === 1;
};
