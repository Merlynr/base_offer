// @algorithm @lc id=100284 lang=javascript
// @title jian-sheng-zi-lcof

// @author Merlynr
//@test(10)=36
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let res = n / 3,
    mod = n % 3;
  const pow = (num, p) => {
    let sum = 1;
    for (let i = 1; i <= p; i++) {
      sum *= num;
    }
    return sum;
  };
  if (mod === 0) {
    return pow(3, res);
  } else if (mod === 1) {
    return pow(3, res - 1) * 4;
  } else {
    return pow(3, res) * 2;
  }
};
