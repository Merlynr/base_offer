// @algorithm @lc id=1580 lang=javascript
// @title shuffle-the-array
// import * as a from "algm";

// @author Merlynr
// @test([2,5,1,3,4,7],3)=[2,3,5,4,1,7]
// @test([1,2,3,4,4,3,2,1],4)=[1,4,2,3,3,2,4,1]
// @test([1,1,2,2],2)=[1,2,1,2]
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i * 2] = nums[i];
    res[i * 2 + 1] = nums[n + i];
  }
  return res;
};
