/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let tmp = nums.sort((a, b) => {
    return a - b;
  });
  for (let i = tmp.length; i > 0; i--) {
    if (tmp[i] === tmp[i - 1]) {
      return [tmp[i], tmp[i] + 1];
    }
  }
};
console.log(findErrorNums((nums = [1, 2, 2, 4])));
