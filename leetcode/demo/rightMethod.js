// right method
function rightMethod(arr) {
  Array.sort(function (a, b) {
    return a - b;
  });
}
// random Array
function generateRandomArray(maxSize, maxValue) {
  let random_arr = new Array(Math.floor((maxSize + 1) * Math.random()));
  for (let i in random_arr.length) {
    random_arr[i] = Math.floor(Math.random() * (maxValue + 1));
  }
  return random_arr;
}
console.log(
  "🚀 ~ file: rightMethod.js ~ line 15 ~ generateRandomArray ~ random_arr",
  generateRandomArray(5, 4)
);

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
    return arr[i];
  }
}
