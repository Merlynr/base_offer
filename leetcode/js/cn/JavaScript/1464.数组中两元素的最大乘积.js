// @algorithm @lc id=1574 lang=javascript
// @title maximum-product-of-two-elements-in-an-array

// @author Merlynr
// @test([3,4,5,2])=12
// @test([1,5,4,5])=16
// @test([3,7])=12
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length < 2) return;
  arr = nums.sort((a, b) => b - a);
  return (arr[0] - 1) * (arr[1] - 1);
};
