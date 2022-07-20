/*
 * @Author: Merlynr
 * @Date: 2022-07-20 23:32:54
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-20 23:42:16
 */

exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;
exports.InsertSort = InsertSort;
exports.insertSort = insertSort;
exports.mergeSort = mergeSort;
// * 冒泡排序 O(n^2)
function bubbleSort(arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    for (let end = arr.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
        }
      }
    }
    return arr;
  }
}
// * 选择排序 O(n^2)
function selectionSort(arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    for (let i = 0, len_i = arr.length; i < len_i; i++) {
      let mixIndex = i;
      for (let j = i + 1, len_j = arr.length; j < len_j; j++) {
        arr[j] < arr[mixIndex] ? (mixIndex = j) : mixIndex;
      }
      if (i != mixIndex) {
        swap(arr, i, mixIndex);
      }
    }
    return arr;
  }
}
// * 两个for插入排序
function InsertSort(arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    for (let i = 1, len = arr.length; i < len; i++) {
      let current = arr[i];
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > current) {
          swap(arr, j, j + 1);
          current = arr[j];
        }
      }
    }
    return arr;
  }
}
// * 自个写的插入排序
function insertSort(arr) {
  if (Array.isArray(arr) && arr.length > 1) {
    for (let i = 1, len = arr.length; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0) {
        if (arr[j] > current) swap(arr, j + 1, j);
        current = arr[j];
        j--;
      }
    }
    return arr;
  }
}
// *归并排序 递归需要拿到返回值才能在比对器中比对，不然bug
function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length >> 1);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let tmpArr = [];
  // 两个子模块比对插入
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      tmpArr.push(left.shift());
    } else {
      tmpArr.push(right.shift());
    }
  }
  return tmpArr.concat(left).concat(right);
}
// 两块内存之间的交换,两个数的内存不能指向同一个,//* 数组中不存在叠合的数值交换则也可以使用
function swap(array, left, right) {
  array[left] ^= array[right];
  array[right] ^= array[left];
  array[left] ^= array[right];
  return array;
}
// 三块内存之间的交换
function swapper(array, left, right) {
  let tmp = array[left];
  array[left] = array[right];
  array[right] = tmp;
  return array;
}
