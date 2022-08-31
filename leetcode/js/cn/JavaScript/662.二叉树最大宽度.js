// @algorithm @lc id=662 lang=javascript
// @title maximum-width-of-binary-tree

// @author Merlynr
// @test([1,3,2,5,3,null,9])=4
// @test([1,3,2,5,null,null,9,6,null,7])=7
// @test([1,3,2,5])=2
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
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxWidth = 1n,
    map = new Map();
  const dfs = (root, level, currIdx) => {
    if (!map.has(level)) {
      map.set(level, currIdx);
    } else {
      let width = currIdx - map.get(level) + 1n;
      maxWidth = maxWidth > width ? maxWidth : width;
    }
    if (root.left) dfs(root.left, level + 1, currIdx * 2n - 1n);
    if (root.right) dfs(root.right, level + 1, currIdx * 2n);
  };
  dfs(root, 0, 1n);
  return maxWidth;
};
