/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (77.11%)
 * Likes:    1342
 * Dislikes: 0
 * Total Accepted:    821K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最大深度 3 。
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @description 只要遍历到这个节点既没有左子树，又没有右子树的时候
 *说明就到底部了，这个时候如果之前记录了深度，就可以比较是否比之前记录的深度大，大就更新深度
 *然后以此类推，一直比较到深度最大的
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let dep = 1;
  const dfs = (root, depth) => {
    if (!root.right && !root.left) dep = Math.max(dep, depth);
    if (root.left) dfs(root.left, depth + 1);
    if (root.right) dfs(root.right, depth + 1);
  };
  dfs(root, dep);
  return dep;
};
// @lc code=end
