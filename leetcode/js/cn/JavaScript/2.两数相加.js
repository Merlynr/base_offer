// @algorithm @lc id=2 lang=javascript
// @title add-two-numbers
import * as a from "algm";
import { ListNode } from "algm";
// @author Merlynr
// @test([2,4,3],[5,6,4])=[7,0,8]
// @test([0],[0])=[0]
// @test([9,9,9,9,9,9,9],[9,9,9,9])=[8,9,9,9,0,0,0,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const log = console.debug.bind(console);
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let reverse = (list) => {
    let [pre, node] = [null, list];
    while (node) {
      let tmp = node.next;
      node.next = pre;
      pre = node;
      node = tmp;
    }
    return pre;
  };
  let r_l1 = reverse(l1),
    r_l2 = reverse(l2),
    jw = 0,
    listNode = new ListNode();
  while (r_l1 && r_l2) {
    listNode.val = (r_l1.val + r_l2.val + jw) % 10;
    jw = ~~((r_l1.val + r_l2.val + jw) / 10);
    log(listNode);
    // TODO: 如何将加好的数字转移到listNode中
    listNode.next = listNode;
    listNode = listNode.next;
    log(listNode);
    r_l1 = r_l1.next;
    r_l2 = r_l2.next;
  }

  log(listNode);
  return listNode;
};
