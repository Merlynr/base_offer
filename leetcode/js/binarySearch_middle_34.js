/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!Array.isArray(nums) || nums.length < 1) {
    return [-1, -1];
  }
  let len = nums.length,
    l = 0,
    r = len - 1;
  while (l <= r) {
    if (nums.indexOf(target) === -1) {
      (l = -1), (r = -1);
      break;
    }
    if (nums[l] !== target) {
      l++;
    }
    if (nums[r] !== target) {
      r--;
    }
    if (nums[l] === nums[r]) {
      break;
    }
  }
  return [l, r];
};
var searchRange1 = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};
var searchRange2 = function (nums, target) {
  let len = nums.length,
    l = -1,
    r = -1;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === target && r === -1) {
      l = r = i;
    }
    if (nums[i] === target) {
      l = i;
    }
  }
  return [l, r];
};
var searchRange3 = function (nums, target) {
  if (!Array.isArray(nums) || nums.length < 1) {
    return [-1, -1];
  }
  let ans = [-1, -1],
    len = nums.length,
    left = 0,
    right = len - 1;

  // 迭代查找右边界
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target && (mid === len - 1 || nums[mid + 1] > target)) {
      ans[1] = mid;
      break;
    }

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 迭代查找左边界
  left = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target && (mid === 0 || nums[mid - 1] < target)) {
      ans[0] = mid;
      break;
    }

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans[0] === -1 || ans[1] === -1 ? [-1, -1] : ans;
};
console.log(searchRange3((nums = [5, 7, 7, 8, 8, 10]), (target = 8)));
