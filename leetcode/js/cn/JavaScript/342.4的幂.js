// @algorithm @lc id=342 lang=javascript
// @title power-of-four

// @author Merlynr
// @test(16)=true
// @test(5)=false
// @test(1)=true
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 4) {
    n /= 4;
  }
  return n === 1;
};
