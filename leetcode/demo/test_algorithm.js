// 待测试的
function insertSort(arr) {
  for (const [i, value] of Object.entries(arr)) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

// 简单方法
function rightMethod(arr) {
  arr.sort((a, b) => a - b);
}

//随机数生成器
function generateRandomArray(maxSize, maxValue) {
  // 生成长度，值随机的数组
  let random_arr = new Array(Math.floor((maxSize + 1) * Math.random()));
  for (let i = 0; i < random_arr.length; i++) {
    random_arr[i] = Math.floor((maxValue + 1) * Math.random());
  }
  return random_arr;
}

// 硬拷贝数组
function copyArr(arr) {
  if (arr == null) {
    return null;
  }
  return [].concat(arr);
}

function isEqual(arr1, arr2) {
  if (arr1 ^ arr2) {
    return false;
  }
  if (!arr1 & !arr2) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

var quickSort_1 = function (array) {
  if (array.length <= 1) {
    return array;
  }
  // 选择基准
  var pivotIndex = Math.floor(array.length >> 1);
  //   在原数组中删除pivot同时返回pivot
  var pivot = array.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (const ele of array) {
    if (ele < pivot) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  //   递归
  return quickSort_1(left).concat(pivot, quickSort_1(right));
};

// test
const qs_1 = require("./quick_sort");
const quickSort_2 = require("./quick_sort");
const quickSort_3 = require("./quick_sort");

function Test() {
  let testTimes = 500;
  let maxSize = 12;
  let maxValue = 12;
  let succeed = true;
  console.log("starting----");
  while (testTimes > 0) {
    let arr = generateRandomArray(maxSize, maxValue);
    let arr1 = copyArr(arr);
    let arr2 = copyArr(arr);
    // insertSort(arr1);

    arr1 = quickSort_2.quickSort_2(arr1);
    rightMethod(arr2);
    if (!isEqual(arr1, arr2)) {
      succeed = false;
      break;
    }
    --testTimes;
  }
  console.log(succeed ? "succeed" : "Error");
}

Test();
// console.log(quickSort_1([3,1,4,1,5,9,2,6]));
