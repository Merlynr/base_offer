// @algorithm @lc id=66 lang=javascript
// @title plus-one

// @author Merlynr
// @test([1,2,3])=[1,2,4]
// @test([4,3,2,1])=[4,3,2,2]
// @test([9])=[1,0]
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length,
    jw = 1;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      jw = 1;
      continue;
    } else {
      digits[i] += 1;
      break;
    }
  }
  if (digits[0] === 0) digits.unshift(1);
  return digits;
};
