/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (58.20%)
 * Likes:    2074
 * Dislikes: 0
 * Total Accepted:    670K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 * @description 判断两个指针当前节点值是否相等
 * 判断 A 的右子树与 B 的左子树是否对称
 * 判断 A 的左子树与 B 的右子树是否对称
 */
var isSymmetric = function (root) {
  if (!root) return root;
  const isSameChild = (l_child = root.left, r_child = root.right) => {
    // 两个if互斥
    if (l_child === null && r_child === null) return true;
    if (l_child === null || r_child === null) return false;
    return (
      l_child.val === r_child.val &&
      isSameChild(l_child.right, r_child.left) &&
      isSameChild(l_child.left, r_child.right)
    );
  };
  return isSameChild();
};
// @lc code=end
