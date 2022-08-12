/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  // write code here
  if (!Array.isArray(nums) || nums.length == 0) {
    return -1;
  }
  let len = nums.length,
    l = 0,
    r = len - 1;
  if (nums[0] > target || nums[len - 1] < target) {
    return -1;
  }
  while (l <= r) {
    let m = l + Math.floor((r - l) >> 1);
    let n = nums[m];
    if (n === target) {
      return m;
    } else if (n < target) {
      l = m + 1;
    } else if (n > target) {
      r = m - 1;
    }
  }
  return -1;
}
module.exports = {
  search: search,
};

console.log(search([-1, 0, 3, 4, 6, 10, 13, 14], 2));
