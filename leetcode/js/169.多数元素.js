/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length < 1) {
    return;
  }
  //   方法一
  //   let map = new Map(),
  //     index = nums.length - 1,
  //     max = nums.length / 2,
  //     maxVal = nums[0];
  //   for (let i = index; i >= 0; i--) {
  //     if (!map.has(nums[i])) {
  //       map.set(nums[i], 1);
  //     } else {
  //       map.set(nums[i], map.get(nums[i]) + 1);
  //     }
  //   }
  //   for (let [k, v] of map.entries()) {
  //     v >= max ? ((max = v), (maxVal = k)) : null;
  //   }
  //   return maxVal;
  // 方法二
  let obj = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};
// @lc code=end
