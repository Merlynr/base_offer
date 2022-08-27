// @algorithm @lc id=66 lang=javascript
// @title plus-one

// @author Merlynr
// @test([1,2,3])=[1,2,4]
// @test([4,3,2,1])=[4,3,2,2]
// @test([9])=[1,0]
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("");
};
