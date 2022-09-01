// @algorithm @lc id=1127 lang=javascript
// @title last-stone-weight
import * as a from "algm";

// @author Merlynr
// @test([2,7,4,1,8,1])=1
// @test([1])=1
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const pq = new MaxPriorityQueue();
  for (const stone of stones) {
    pq.enqueue("x", stone);
  }

  while (pq.size() > 1) {
    const a = pq.dequeue()["priority"];
    const b = pq.dequeue()["priority"];
    if (a > b) {
      pq.enqueue("x", a - b);
    }
  }
  return pq.isEmpty() ? 0 : pq.dequeue()["priority"];
};
