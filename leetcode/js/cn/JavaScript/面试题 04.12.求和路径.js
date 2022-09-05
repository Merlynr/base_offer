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
  // 记录前缀序列
  prefix.set(0, 1);
  return dfs(root, prefix, 0, sum);
};
const dfs = (root, prefix, curr, sum) => {
  const log = (_) => {};
  if (!root) return 0;
  let res = 0;
  curr += root.val;
  // 当前节点为node，从root到node的前缀和为curr，接下来不是要递归调用函数对左右子节点进行处理嘛，
  // 所以要把当前节点的前缀和加入到map中（curr值可能会重复，所以其数量应该是直接加一，map的默认值为0），
  // 在接下来的递归中，左右子节点就需要用到其父节点的前缀和。当左右子节点处理完之后，就会往回倒，
  // 那么这个前缀和就不应该出现了，因为不可能是其他节点的父节点，所以要减去它的数量
  res = prefix.get(curr - sum) || 0;

  prefix.set(curr, (prefix.get(curr) || 0) + 1);
  log(prefix);
  res += dfs(root.left, prefix, curr, sum);
  res += dfs(root.right, prefix, curr, sum);
  prefix.set(curr, (prefix.get(curr) || 0) - 1);
  return res;
};
