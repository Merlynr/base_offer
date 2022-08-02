/*
 * @Author: Merlynr
 * @Date: 2022-08-01 14:55:17
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-01 15:20:25
 * 对于给定的二叉树，判断是否存在一条完整路径（从根节点开始，到叶节点结束的连线），其路径上节点的值之和为target，输出布尔值。
 */
class Node {
  /**
   * @param  {} value 当前点值
   * @param  {} left    左结点
   * @param  {} right   右结点
   */
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BTree {
  constructor() {
    this.list = [];
  }
  addRoot(node) {
    if (node != null) {
      this.list.push(node);
    }
  }
  addChildNode(pNode, node, isLeft) {
    this.list.push(node);
    if (isLeft) {
      pNode.left = node;
    } else {
      pNode.right = node;
    }
  }
  getNode(index) {
    return this.list[index];
  }
}
//创建示例中的二叉树
let bTree = new BTree();
//第一层 根结点
bTree.addRoot(new Node(6, null, null));
//第二层
bTree.addChildNode(bTree.getNode(0), new Node(2, null, null), true);
bTree.addChildNode(bTree.getNode(0), new Node(3, null, null), false);
//第三层
bTree.addChildNode(bTree.getNode(1), new Node(-1, null, null), true);
bTree.addChildNode(bTree.getNode(1), new Node(3, null, null), false);
bTree.addChildNode(bTree.getNode(2), new Node(0, null, null), true);

function hasPathSum(node, target) {
  if (!node.left && !node.right) {
    return node.value === target;
  } else {
    if (!!node.left) {
      return hasPathSum(node.left, target - node.value);
    }
    if (!!node.right) {
      return hasPathSum(node.right, target - node.value);
    }
  }
}

console.log(hasPathSum(bTree.getNode(0), 7));

// * 她说：“二叉树BTree和结点Node本质上可以是相同的数据结构的，根结点其实就可以代表一棵树了，你可仔细想想。你的答题虽然实现了目的，但是不需要定义2个类来分别放树和结点，能否精简一下呢？”
// * 的确，她说的对，完全可以精简。如果要求树和结点的数据结构一样，那可以考虑用数组的形式来表示它们，用多维数组来代表一颗二叉树即可，于是有了第二种解法。
//用多维数组代表题中示例的树，这个数组是按“前序遍历”后排序
let arrSource = [6, [2, [-1], [3]], [3, [0]]];
class newNode {
  constructor(value, left, right) {
    if (!!value) {
      this.value = value;
      if (!!left) {
        this.left = left;
      }
      if (!!right) {
        this.right = right;
      }
    }
  }
}
function makeTree(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 1) {
      return new Node(arr[0]);
    }
    return new Node(arr[0], makeTree(arr[1]), makeTree(arr[2]));
  }
}
let btree = makeTree(arrSource);
console.log("🚀 ~ file: findWholeChildTree.js ~ line 94 ~ btree", btree);
debugger;
console.log(hasPathSum(bTree.getNode(0), 7));
