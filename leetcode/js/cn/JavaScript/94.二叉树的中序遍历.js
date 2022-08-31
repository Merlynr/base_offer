// @algorithm @lc id=94 lang=javascript
// @title binary-tree-inorder-traversal
import * as a from "algm";
import { TreeNode } from "algm";
// @author Merlynr
// @test([1,null,2,3])=[1,3,2]
// @test([])=[]
// @test([1])=[1]
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
