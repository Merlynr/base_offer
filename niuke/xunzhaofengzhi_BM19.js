/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function findPeakElement(nums) {
  // write code here
  let len = nums.length,
    l = 0,
    r = len - 1;
  if (len === 1) {
    return 0;
  }
  if (len === 2) {
    return nums[1] > nums[0] ? 1 : 0;
  }
  while (l <= r) {
    let m = l + Math.floor((r - l) >> 1);
    let mm = nums[m];
    if (mm > nums[m - 1] && mm > nums[m + 1]) {
      return m;
    }
    if ((mm > nums[m - 1] && m === len - 1) || (mm > nums[m + 1] && m === 0)) {
      return m;
    }
    if (mm > nums[m - 1] && mm < nums[m + 1]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}
module.exports = {
  findPeakElement: findPeakElement,
};

console.log(
  findPeakElement([
    -31, -59, -94, 13, -44, 54, 83, -68, 40, 72, 0, 29, -16, 88, 27, -23, 59,
    11, 15, 37, -11, -2, -37, -21, -81, -32, -46, 93, -98, 75, 24, 1, 70, -49,
    -15, -57, -79, -41, 64, -52, 97, -92, 63, 3, -42, -10, -6, 18, -71, 21,
  ])
);
