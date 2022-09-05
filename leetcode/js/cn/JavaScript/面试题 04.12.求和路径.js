// @algorithm @lc id=1000009 lang=javascript
// @title paths-with-sum-lcci
import * as a from "algm";
import { TreeNode } from "algm";
// @author Merlynr
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  const prefix = new Map();
  prefix.set(0, 1);
};
const dfs = (root, prefix, curr, sum) => {
  if (!root) return 0;
  let res = 0;
  curr += root.val;

  ret = prefix.get(curr - sum) || 0;
};
