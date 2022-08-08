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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return null;
  }
  let temp = root;
  // 深度优先遍历
  function deepFirst(next) {
    if (!next) {
      return;
    }
    // 缓存
    const rightTemp = next.right;
    temp.val = next.val;
    // console.log('val', next.val);
    // 左节点不为空，遍历
    if (next.left) {
      temp.right = next.left;
      temp = temp.right;
      next.left = null;
      deepFirst(temp);
    }
    if (rightTemp) {
      temp.right = rightTemp;
      temp = temp.right;
      deepFirst(temp);
    }
  }
  deepFirst(root);
};
