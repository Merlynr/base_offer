/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  let res = [];

  dfs(root, target, res, k);

  return res;
};

function dfs(root, target, res, k) {
  if (!root) return;
  // 查找到目标节点
  if (root === target) {
    // 向下查找
    getDowVal(root, 0, res, k);
    // 往上查找
    getUpVal(root.parent, 1, res, k, root);
  } else {
    if (root.left) {
      root.left.parent = root;
      dfs(root.left, target, res, k);
    }
    if (root.right) {
      root.right.parent = root;
      dfs(root.right, target, res, k);
    }
  }
}

function getUpVal(root, dep, res, k, child) {
  if (!root) return;
  if (dep === k) {
    res.push(root.val);
  } else {
    getUpVal(root.parent, dep + 1, res, k, root);
    // 换边查找
    if (root.left === child) {
      getDowVal(root.right, dep + 1, res, k);
    }
    if (root.right === child) {
      getDowVal(root.left, dep + 1, res, k);
    }
  }
}

function getDowVal(root, dep, res, k) {
  if (!root) return;
  if (dep === k) {
    res.push(root.val);
  } else {
    getDowVal(root.left, dep + 1, res, k);
    getDowVal(root.right, dep + 1, res, k);
  }
}
