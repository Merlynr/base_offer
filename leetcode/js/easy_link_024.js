/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let pre = null,
    cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
var reverseList = function (head) {
  if (!head || !head.next) return head;
  return reverse(null, head);
};
function reverse(pre, curr) {
  if (!curr) {
    return pre;
  }
  let next = curr.next;
  curr.next = pre;
  return reverse(curr, next);
}
