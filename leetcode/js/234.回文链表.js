/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (50.20%)
 * Likes:    1483
 * Dislikes: 0
 * Total Accepted:    489.9K
 * Total Submissions: 936K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 *
 *
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 */

// @lc code=start
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
  if (head == null || head.next == null) {
    return true;
  }
  // 断成两个链表
  let sl = head,
    fa = head,
    prev;
  while (fa && fa.next) {
    prev = sl;
    sl = sl.next;
    fa = fa.next.next;
  }
  prev.next = null;
  //  翻转后半段
  let h2 = null;
  while (sl) {
    const tmp = sl.next;
    sl.next = h2;
    h2 = sl;
    sl = tmp;
  }
  // 比对
  while (head && h2) {
    if (head.val != h2.val) {
      return false;
    }
    head = head.next;
    h2 = h2.next;
  }
  return true;
};
// @lc code=end
