/*
 * @Author: Merlynr
 * @Date: 2022-07-20 23:32:54
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-21 21:55:07
 */

exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;
exports.InsertSort = InsertSort;
exports.insertSort = insertSort;
exports.mergeSort = mergeSort;
exports.shellSort = shellSort;
exports.quickSort_1 = quickSort_1;
exports.quickSort_2 = quickSort_2;
exports.quickSort_3 = quickSort_3;
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
// * 冒泡排序 O(n^2)
function bubbleSort(arr) {
  if (arr.length > 1) {
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
  if (arr.length > 1) {
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
  if (arr.length > 1) {
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
  if (arr.length > 1) {
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
  if (arr.length < 2) {
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
// * 希尔排序
function shellSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let len = arr.length;
  for (let gap = Math.floor(len >> 1); gap > 0; gap = Math.floor(gap >> 1)) {
    // 插入排序
    for (let r = gap; r < len; r++) {
      let rNum = arr[r];
      let l = r - gap;
      for (; l >= 0 && arr[l] > rNum; l -= gap) {
        arr[l + gap] = arr[l];
      }
      // 当l坐标进行两次减去gap后为负数，然后l=r-gap-gap+gap=l,左值等于右值
      arr[l + gap] = rNum;
    }
  }
  return arr;
}
// * base快排
function quickSort_1(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // 选择基准
  let pivotIndex = Math.floor(arr.length >> 1);
  // 删除并返回基准
  let pivot = arr.splice(pivotIndex, 1);

  let left = [];
  let right = [];

  for (const ele of arr) {
    if (ele < pivot) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  //   递归
  return quickSort_1(left).concat([pivot], quickSort_1(right));
}
// * 快排 q取最后一个数
function quickSort_2(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // 选择基准
  let pivot = arr.slice(-1);
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
  return quickSort_2(left).concat(medium, quickSort_2(right));
}
// TODO bug 快排 随机取基，时间复杂度为O（N*logN）
function quickSort_3(arr, L, R) {
  if (L < R) {
    // 随机取基
    swapper(arr, L + Math.floor(Math.random() * (R - L + 1)), R);

    let p = partition(arr, L, R); //为数组的边界
    quickSort_3(arr, L, p[0] - 1);
    quickSort_3(arr, p[1] + 1, R);
  }
  return arr;
}
function partition(arr, L, R) {
  let less = L - 1;
  let more = R + 1;
  let idx = L;
  for (; idx < more; ) {
    if (arr[idx] < arr[R]) {
      swapper(arr, ++less, idx++); //less先+1再交换，idx先交换再+1
    } else if (arr[idx] > arr[R]) {
      swapper(arr, --more, idx);
    } else {
      idx++;
    }
  }
  return [less + 1, more - 1];
}
