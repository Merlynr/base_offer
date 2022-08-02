/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let str = "",
    str_reverse = "";
  while (head) {
    str += head.val;
    str_reverse = head.val + str_reverse;
    head = head.next;
  }
  return str === str_reverse;
};
class Stack {
  constructor() {
    this.list = [];
  }
  get() {
    return this.list.pop();
  }
  set(val) {
    this.list.push(val);
  }
}
