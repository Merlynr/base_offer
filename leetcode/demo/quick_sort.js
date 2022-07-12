1; // 对于这段代码的分析：
// 缺点：

// 获取基准点使用了一个splice操作，在js中splice会对数组进行一次拷贝的操作，而它最坏的情况下复杂度为O(n)，而O(n)代表着针对数组规模的大小进行了一次循环操作。
// 首先我们每次执行都会使用到两个数组空间，产生空间复杂度。
// concat操作会对数组进行一次拷贝，而它的复杂度也会是O(n)
// 对大量数据的排序来说相对会比较慢
// 优点：

// 代码简单明了，可读性强，易于理解
// 非常适合用于面试笔试题
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
  return quickSort_1(left).concat([pivot], quickSort_1(right));
};

var quickSort_2 = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //   取最后一个数为pivot
  var pivot = arr.slice(-1);
  var medium = [];
  var left = [];
  var right = [];
  for (const ele of arr) {
    if (ele < pivot) {
      left.push(ele);
    }
    if (ele == pivot) {
      medium.push(ele);
    }
    if (ele > pivot) {
      right.push(ele);
    }
  }
  // return right
  return quickSort_2(left).concat(medium, quickSort_2(right));
};
//随机选择基准,因为有随机选择，所以时间复杂度为O（N*logN）
var quickSort_3 = function (arr, L, R) {
  if (L < R) {
    swaps(arr, L + Math.round(Math.random() * (R - L + 1)), R);

    let p = partition(arr, L, R); //为数组的边界
    quickSort_3(arr, L, p[0] - 1);
    quickSort_3(arr, p[1] + 1, R);
  }
  return arr
};

function partition(arr,L,R) {
  let less=L-1;
  let more=R+1;
  let idx=L;
  for(;idx<more;){
      if (arr[idx]<arr[R]){
          swaps(arr,++less,idx++);//less先+1再交换，idx先交换再+1
      }
      else  if(arr[idx]>arr[R]){
          swaps(arr,--more,idx);
      }
      else {
          idx++;
      }
  }
  return [less+1,more-1];
}
var swapArr = function (arr, l, r) {
  arr[l] ^= arr[r];
  arr[r] ^= arr[l];
  arr[l] ^= arr[r];
};
// 存在相同元素
var swaps = function (arr, l, r) {
  let a = arr[l];
  arr[l] = arr[r];
  arr[r] = a;
};

// let qs_1 = (arr) => {
//   return quickSort_1(arr);
// };
let arr = [3, 1, 4, 1, 5, 9, 2, 6];
// console.log(quickSort_1([3, 1, 4, 1, 5, 9, 2, 6]));
// console.log(quickSort_2([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(quickSort_3(arr,0,arr.length-1));
// swaps(arr,1,4)
// console.log(arr);

// O(N^2)
exports.quickSort_1 = quickSort_1;
exports.quickSort_2 = quickSort_2;
exports.quickSort_3 = quickSort_3;
