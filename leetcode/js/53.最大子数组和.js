/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (55.28%)
 * Likes:    5239
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 *
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let len = nums.length,
//     dp = [nums[0]];
//   if (len < 1) {
//     return 0;
//   }
//   for (let i = 1; i < len; i++) {
//     dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
//   }
//   return Math.max(...dp);
// };
//  * 以上解法时间复杂度是 O(N)，空间复杂度也是 O(N)，较暴力解法已经很优秀了，不过注意到 dp[i] 仅仅和 dp[i-1] 的状态有关，那么我们可以进行「状态压缩」，将空间复杂度降低

// var maxSubArray = function (nums) {
//   let n = nums.length;
//   if (n == 0) return 0;
//   // base case
//   let dp_0 = nums[0];
//   let dp_1 = 0,
//     res = dp_0;

//   for (let i = 1; i < n; i++) {
//     // dp[i] = max(nums[i], nums[i] + dp[i-1])
//     dp_1 = Math.max(nums[i], nums[i] + dp_0);
//     dp_0 = dp_1;
//     // 顺便计算最大的结果
//     res = Math.max(res, dp_1);
//   }

//   return res;
// };
// * 扫描法 https://blog.csdn.net/zwzsdy/article/details/80029796
var maxSubArray = function (nums) {
  let cur = nums[0],
    sum = nums[0],
    len = nums.length;
  for (let i = 1; i < len; i++) {
    if (cur < 0) cur = nums[i];
    else cur = cur + nums[i];
    if (cur > sum) sum = cur;
  }
  return sum;
};
// @lc code=end
