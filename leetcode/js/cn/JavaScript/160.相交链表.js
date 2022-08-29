// @algorithm @lc id=160 lang=javascript
// @title intersection-of-two-linked-lists

// @author Merlynr
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let tmpA = headA,
    tmpB = headB;
  while (tmpB !== tmpA) {
    tmpA = tmpA !== null ? tmpA.next : headA;
    tmpB = tmpB !== null ? tmpB.next : headB;
  }
  return tmpB;
};
