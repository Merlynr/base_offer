/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (73.67%)
 * Likes:    819
 * Dislikes: 0
 * Total Accepted:    334.4K
 * Total Submissions: 444.3K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 *
 * 示例 2:
 *
 *
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }
  let res = Array.from(new Array(numRows), () => []),
    i = 0;
  while (i < numRows) {
    res[i][0] = 1;
    res[i][i] = 1;
    let j = 1;
    while (j < i) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      j++;
    }
    i++;
  }
  return res;
};
// console.log(generate(5));
// @lc code=end
