// @algorithm @lc id=141 lang=javascript
// @title linked-list-cycle

// @author Merlynr
// @test([3,2,0,-4],1)=true
// @test([1,2],0)=true
// @test([1],-1)=false
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let traver = head;
  while (traver) {
    if (traver.isVisited) return true;
    traver.isVisited = true;
    traver = traver.next;
  }
  return false;
};
