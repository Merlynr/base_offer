// @algorithm @lc id=78 lang=javascript
// @title subsets
import * as a from "algm";

// @author Merlynr
// @test([1,2,3])=[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// @test([0])=[[],[0]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const log = console.log.bind(console);
const log = (_) => {};
var subsets = function (nums) {
  let tmp = [],
    res = [],
    len = nums.length;
  const dfs = (cur) => {
    if (cur === len) {
      res.push(tmp.slice());
      return;
    }
    tmp.push(nums[cur]);
    dfs(cur + 1);
    tmp.pop();
    dfs(cur + 1);
  };
  dfs(0);
  return res;
};
log(subsets([1, 2, 3]));
