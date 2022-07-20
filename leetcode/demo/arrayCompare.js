/*
 * @Author: Merlynr
 * @Date: 2022-07-20 23:46:09
 * @Last Modified by:   Merlynr
 * @Last Modified time: 2022-07-20 23:46:09
 */
// right method
function rightMethod(arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    arr.sort((a, b) => {
      return a - b;
    });
  }
}
// random Array
function generateRandomArray(maxSize, maxValue) {
  let random_arr = new Array(Math.floor((maxSize + 1) * Math.random()));
  for (let i = 0, len = random_arr.length; i < len; i++) {
    random_arr[i] = Math.floor(Math.random() * (maxValue + 1));
  }
  return random_arr;
}
// 硬拷贝数组
function copyArr(arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    return [...arr];
  }
}

// isEqual
function isEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  if (arr1 ^ arr2) {
    return false;
  }
  if (!arr1 & !arr2) {
    return true;
  }
  for (let i in arr1) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

function test(tt, ms, mv, sortFunc) {
  let testTimes = tt;
  let maxSize = ms;
  let maxValue = mv;
  let succeed = true;
  console.log("🚀 ~ file: rightMethod.js ~ ~ Test ~ Starting");
  let sum_t1 = 0.0,
    sum_t2 = 0.0;
  while (testTimes > 0) {
    let arr = generateRandomArray(maxSize, maxValue);
    if (arr.length < 2) {
      continue;
    }
    let arr1 = copyArr(arr);
    let arr2 = copyArr(arr);
    // ! 函数比较
    let t1 = performance.now();
    rightMethod(arr1);
    let t1_e = performance.now();
    sum_t1 += t1_e - t1;

    var t2 = performance.now();
    arr2 = sortFunc(arr2);
    var t2_e = performance.now();
    sum_t2 += t2_e - t2;

    if (!isEqual(arr1, arr2)) {
      succeed = false;
      console.log(arr1, arr2);
      break;
    }
    --testTimes;
  }
  console.log("🚀 ~ file: rightMethod.js ~ ~ Test ~ Ending");
  console.log(
    succeed
      ? `🌞${testTimes} epochs ：Bubble spent time ${sum_t1}ms
      Array.sort() spent time ${sum_t2}ms`
      : "Error"
  );
}
// * 目前四个排序算法 bubbleSort,selectionSort,InsertSort,insertSort,mergeSort
// TODO 计时器应该还存在问题
const sortFunc = require("./tenSort");
test(99999, 99, 99, sortFunc.insertSort);
