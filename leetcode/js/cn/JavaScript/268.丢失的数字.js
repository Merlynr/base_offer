// @algorithm @lc id=268 lang=javascript
// @title missing-number

// @author Merlynr
// @test([3,0,1])=2
// @test([0,1])=2
// @test([9,6,4,2,3,5,7,0,1])=8
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length,
    sums = (len * (len + 1)) / 2,
    sum = nums.reduce((prev, cur) => prev + cur);
  return sums - sum;
};
