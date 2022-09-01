// @algorithm @lc id=1000343 lang=javascript
// @title TVdhkn
import * as a from "algm";

// @test([1,2,3])=[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// @author Merlynr
// TODO: 没看懂
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < 1 << n; ++mask) {
    const t = [];
    for (let i = 0; i < n; ++i) {
      if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
};
console.log(subsets([1, 2, 3]));
