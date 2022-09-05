// @algorithm @lc id=652 lang=javascript
// @title find-duplicate-subtrees
import * as a from "algm";
import { TreeNode } from "algm";
// @test([0,0,0,0,null,null,0,null,null,null,0])=[[0]]
// @test([0,0,0,0,null,null,0,null,null,null,0])=[[0]]
// @test([0,0,0,0,null,null,0,null,null,null,0])=[[0]]
// @test([0,0,0,0,null,null,0,null,null,null,0])=[[0]]
// @test([0,0,0,0,null,null,0,null,null,null,0])=[[0]]
// @test([0,0,0,0,null,null,0,null,null,null,0])=[[0]]
// @author Merlynr
// @test([1,2,3,4,null,2,4,null,null,4])=[[2,4],[4]]
// @test([2,1,1])=[[1]]
// @test([2,2,2,3,null,3,null])=[[2,3],[3]]
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const tree = new Map();
  const repeat = new Set();
  const dfs = (node) => {
    if (!node) {
      return "";
    }
    let sb = "";
    sb += node.val;
    sb += "(";
    sb += dfs(node.left);
    sb += ")(";
    sb += dfs(node.right);
    sb += ")";
    if (tree.has(sb)) {
      repeat.add(tree.get(sb));
    } else {
      tree.set(sb, node);
    }
    // 递归返回子树
    return sb;
  };
  dfs(root);
  return [...repeat];
};
