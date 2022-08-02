// function twoSum(nums, target) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     let cur = nums[i];
//     for (let j = nums.length - 1; j >= 0; j--) {
//       if (cur + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// function twoSum(nums, target) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     let cur = nums[i],
//       others = target - cur,
//       others_index = nums.indexOf(others);
//     if (others_index > -1 && i !== others_index) {
//       return [i, others_index];
//     }
//   }
//   return [];
// }

// function twoSum(nums, target) {
//   let obj = {};
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (obj[target - nums[i]] > 0) {
//       return [obj[target - nums[i]], i];
//     }
//     obj[nums[i]] = i;
//   }
//   return [];
// }

// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = nums.length - 1; i >= 0; i--) {
//     let val = nums[i];
//     map.set(val, i);
//   }
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
//       return [i, map.get(target - nums[i])];
//     }
//   }
//   return [];
// }

// function twoSum(nums, target, i = 0, objs = {}) {
//   let obj = objs;
//   if (obj[target - nums[i]] >= 0) {
//     return [obj[target - nums[i]], i];
//   } else {
//     obj[nums[i]] = i;
//     if (i < nums.length - 1) {
//       i++;
//       return twoSum(nums, target, i, obj);
//     } else {
//       return [];
//     }
//   }
// }

var twoSum = function (nums, target, i = 0, maps = new Map()) {
  const map = maps;

  // 判断obj中是否
  if (map.get(target - nums[i]) >= 0) {
    // 存在直接返回两值的下标;
    return [map.get(target - nums[i]), i];
  } else {
    // 不存在，存入obj
    map.set(nums[i], i);
    // 递归继续查找
    if (i < nums.length - 1) {
      // i 自增
      i++;
      return twoSum(nums, target, i, map);
    } else {
      // 递归结束，未查询到结果
      return [];
    }
  }
};

// 测试结果
let result = twoSum([2, 7, 11, 15], 9);
console.log(result); // [0,1]  2,7 满足结果，所以返回其下标[0,1]
