// right method
function rightMethod(arr) {
  if (Array.isArray(arr) && JSON.stringify(arr) !== "[]") {
    arr.sort((a, b) => {
      return a - b;
    });
  }
}
// random Array
function generateRandomArray(maxSize, maxValue) {
  let random_arr = new Array(Math.floor((maxSize + 1) * Math.random()));
  for (let i = 0; i < random_arr.length; i++) {
    random_arr[i] = Math.floor(Math.random() * (maxValue + 1));
  }
  return random_arr;
}

// 硬拷贝数组
function copyArr(arr) {
  if (Array.isArray(arr) && JSON.stringify(arr) !== "[]") {
    return [...arr];
  }
}

// isEqual
function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
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

function Test() {
  let testTimes = 5000;
  let maxSize = 99;
  let maxValue = 99;
  let succeed = true;
  console.log("🚀 ~ file: rightMethod.js ~ ~ Test ~ Starting");
  let sum_t1 = 0.0,
    sum_t2 = 0.0;
  while (testTimes > 0) {
    let arr = generateRandomArray(maxSize, maxValue);
    if (arr.length == 0) {
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
    bubbleSort(arr2);
    var t2_e = performance.now();
    sum_t2 += t2_e - t2;

    if (!isEqual(arr1, arr2)) {
      succeed = false;
      console.log(arr1, arr2);
      break;
    }
    --testTimes;
  }
  console.log("🚀 ~ file: rightMethod.js ~ ~ Test ~ Starting");
  console.log(
    succeed
      ? `🌞${testTimes} epochs ：Bubble spent time ${sum_t1}ms
      Array.sort() spent time ${sum_t2}ms`
      : "Error"
  );
}

// 冒泡排序
function bubbleSort(arr) {
  if (Array.isArray(arr) && JSON.stringify(arr) !== "[]") {
    for (let end = arr.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
        }
      }
    }
  }
}

// 交换
function swap(array, left, right) {
  array[left] ^= array[right];
  array[right] ^= array[left];
  array[left] ^= array[right];
}

Test();
