// @algorithm @lc id=202 lang=javascript
// @title happy-number

// @author Merlynr
// @test(19)=true
// @test(2)=false
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getNext = (n) => {
    n = String(n).split("");
    let sum = 0;
    for (let x of n) {
      sum += Math.pow(x, 2);
    }
    return sum;
  };
  let cycle = [];
  while (n !== 1) {
    cycle.push(n);
    n = getNext(n);
    if (cycle.includes(n)) return false;
  }
  return true;
};
