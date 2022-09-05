// @algorithm @lc id=257 lang=javascript
// @title binary-tree-paths
import * as a from "algm";
import { TreeNode } from "algm";
// @author Merlynr
// @test([1,2,3,null,5])=["1->2->5","1->3"]
// @test([1])=["1"]
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let queue = [];

  let process = (node, path) => {
    if (!node) return;

    path += node.val;

    if (!node.left && !node.right) {
      queue.push(path);
      return;
    }
    process(node.left, path + "->");
    process(node.right, path + "->");
  };
  process(root, "");

  return queue;
};
