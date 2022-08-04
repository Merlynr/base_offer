/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return;
  }
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < nums.length && nums[i] === nums[i + 1]) {
      // 左到右，已知i+1的数结果，跳过重复值去重
      continue;
    }
    if (nums[i] < 0) {
      // 右->左
      break;
    }
    let l = 0,
      r = i - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      }
    }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
debugger;
