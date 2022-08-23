/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (53.26%)
 * Likes:    2597
 * Dislikes: 0
 * Total Accepted:    932.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 *
 * 示例 2：
 *
 *
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// ! 会超时
// var climbStairs = function (n) {
//   const process = (num) => {
//     if (num === 1) return 1;
//     if (num === 2) return 2;
//     return process(num - 1) + process(num - 2);
//   };
//   return process(n);
// };
var climbStairs = function (n) {
  //方法二:记忆化搜索（简单DP）
  //找边界
  if (n === 1) return 1;
  if (n === 2) return 2;
  //定义一个大小为n+1的整型数组，并且初始化为0
  let dp = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end
