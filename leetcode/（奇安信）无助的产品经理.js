/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param nums int整型一维数组
 * @return int整型
 */
// const log = console.debug.bind(console);
const log = (_) => {};
function lengthOfLIS(nums) {
  // write code here
  let helper = [],
    res = 0,
    len = nums.length,
    max = 0,
    tmp = [];
  if (len < 1) return res;
  for (let i = 0; i < len; i++) {
    tmp.push(nums[i]);
    let t = i;

    for (let j = i; j < len; j++) {
      if (nums[t] < nums[j]) {
        tmp.push(nums[j]);
        t = j;
      }
    }
    helper.push(tmp);
    tmp = [];
  }
  log(helper);
  for (let m = 0; m < helper.length; m++) {
    max = max > helper[m].length ? max : helper[m].length;
  }
  return max;
}
log(lengthOfLIS([1, 2, 3, 4, 5, 6, 7]));
module.exports = {
  lengthOfLIS: lengthOfLIS,
};
