// @algorithm @lc id=100285 lang=javascript
// @title jian-sheng-zi-ii-lcof

// @author Merlynr
/**
 * @param {number} n
 * @return {number}
 */
// TODO: 看不懂
var cuttingRope = function (n) {
  // 要把数字拆成尽可能多的3组成时乘积最大，这里有个例外就是4，拆成（2+2）会比（3+1）的结果要好，因此循环到不大于4的时候结束。
  if (n != 1 && n < 4) {
    return n - 1;
  }
  let max = 1;
  while (n > 4) {
    n = n - 3;
    max = (max * 3) % (1e9 + 7);
  }
  max = (max * n) % (1e9 + 7);
  return max;
};
