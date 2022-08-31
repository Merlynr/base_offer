// @algorithm @lc id=1000245 lang=javascript
// @title Gu0c2T
import * as a from "algm";

// @test([2,1,1,2])=4
// @test([1,2,3,1])=4
// @test([2,7,9,3,1])=12
// @test([2,7,9,3,1])=12
// @test([1,2,3,1])=4
// @author Merlynr
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  const dp = new Array(n).fill(-1);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], nums[0]);

  for (let i = 2; i < n; i++) dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

  return dp[n - 1];
};
