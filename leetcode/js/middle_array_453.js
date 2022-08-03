/*
 * @Author: Merlynr
 * @Date: 2022-08-03 23:49:21
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-03 23:58:13
 * 返回的是最小操作次数，所以不用关心让所有元素相等的数是多少。将n-1个元素加1，相当于让1个元素减1的操作数。
 * 为了使所有元素相等，将所有元素减少到最小的元素即可。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = Math.min(...nums);
  let res = 0;
  for (const num of nums) {
    res += num - min;
  }
  return res;
};
var minMoves1 = function (nums) {
  return nums.length != 1
    ? nums.reduce((pre, cur) => {
        return pre + cur;
      }) -
        nums.length * Math.min(...nums)
    : 0;
};

console.log(minMoves1((nums = [1, 2, 3, 5])));
