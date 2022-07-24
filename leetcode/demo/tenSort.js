/*
 * @Author: Merlynr
 * @Date: 2022-07-20 23:32:54
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-23 21:49:06
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
exports.heapSort = heapSort;
exports.countingSort = countingSort;
exports.bucketSort = bucketSort;
exports.radixSort = radixSort;
// 两块内存之间的交换,两个数的内存不能指向同一个,//* 数组中不存在叠合的数值交换则也可以使用
function swap(array, left, right) {
  if (left === right) return array;
  array[left] ^= array[right];
  array[right] ^= array[left];
  array[left] ^= array[right];
  return array;
}
// 三块内存之间的交换
function swapper(array, left, right) {
  if (left === right) return array;
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

// * 堆排序
/**
 * @param  {} arr
 * @param  {} length
 *
 */
function heapSort(arr, length) {
  // 建堆
  let i = length;
  // * 找到最后一个父节点,((length-1)-1)/2
  for (i = Math.floor(i << 1) - 1; i >= 0; i--) {
    buildHeap(arr, length, i);
  }
  for (i = length - 1; i > 0; i--) {
    swap(arr, i, 0);
    // 0代表的是堆顶元素,i=n-1剩下数组长度
    buildHeap(arr, i, 0);
  }
  return arr;
  // 排序
}
/**
 * 维护堆
 * @param i 当前最大结点index
 * 结点为i的父节点为(i-1)/2
 * 结点为i的左孩子为2*i+1
 * 结点为i的右孩子为2*i+2
 */
function buildHeap(arr, length, i) {
  let maxIndex = i;
  let lIndex = (maxIndex << 1) + 1;
  let rIndex = (maxIndex << 1) + 2;

  if (lIndex < length && arr[maxIndex] < arr[lIndex]) {
    maxIndex = lIndex;
  }
  if (rIndex < length && arr[maxIndex] < arr[rIndex]) {
    maxIndex = rIndex;
  }
  if (i != maxIndex) {
    swap(arr, maxIndex, i);
    buildHeap(arr, length, maxIndex);
  }
}
/**
 * 技术排序
 * @param  {} arr
 * @param  {} maxValue 需要提前知道最大值
 */
function countingSort(arr, maxValue) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }
  let bucket = new Array(arr.length + 1),
    sortIndex = 0,
    length = arr.length,
    // * 由于无法获取到有多少种数值,所以取最大值加一
    bucketLen = maxValue + 1;
  for (let i = 0; i < length; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }
  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j]) {
      arr[sortIndex++] = j;
      bucket[j]--;
    }
  }
  return arr;
}
/**
 * 桶排序
 * @param  {} arr
 * @param  {} bucketSize 单桶可装数据量,桶深
 */
function bucketSort(arr, bucketSize) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }
  let minValue = arr[0],
    maxValue = arr[0];
  // 获取桶的边界
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) minValue = arr[i];
    if (arr[i] > maxValue) maxValue = arr[i];
  }
  // 桶初始化
  let DEFAULT_BUCKET_SIZE = 10; //默认桶的深度
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE; //取大的
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; //桶的个数,总的数据除以每个桶的容量
  let buckets = new Array(bucketCount); //桶的数量
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  //利用映射函数将数据分配到各个桶中
  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]); //*对数据进行切片分装
  }

  let tmpArr = [];
  for (let i = 0; i < buckets.length; i++) {
    insertSort(buckets[i]); // 对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      tmpArr.push(buckets[i][j]);
    }
  }
  return tmpArr;
}
/**
 * @param  {} arr
 * @param  {} maxDigit 取得数组中的最大数，并取得位数；
 */
/*
 * 基数排序
 * @param{无序数组} arr
 */
function radixSort(arr) {
  // 取最大值 最大值的位数就是要循环遍历的次数
  const max = Math.max(...arr);
  // 定义一个桶,二维数组
  const buckets = Array.from({ length: 10 }, () => []);
  // 定义当前要遍历的位数 个位 十位 百位...
  let m = 1;
  // * 根据基数进行位数次读写操作
  while (m <= max) {
    // m <= 最大值
    // 下方m要 m*=10 -> 每次遍历增加一位
    // 保证遍历完所有可能的位数

    // 放入桶
    arr.forEach((number) => {
      // digit表示某位数的值
      // *  ~~ === Math.floor() 也就是向下取整
      const digit = ~~((number % (m * 10)) / m);
      // 把该位数的值放到桶buckets中
      // 通过索引确定顺序 类比计数排序
      buckets[digit].push(number);
    });

    // 从桶buckets中取值
    // 完成此步后 就完成了一次位数排序
    let ind = 0;
    buckets.forEach((bucket) => {
      while (bucket.length > 0) {
        // shift从头部取值
        // 保证按照队列先入先出
        arr[ind++] = bucket.shift();
      }
    });

    // 每次最外层while循环后m要乘等10
    // 也就是要判断下一位 比如当前是个位 下次就要判断十位
    m *= 10;
  }
  return arr;
}

let num = 31415926;
let arr = num
  .toString()
  .split("")
  .map((_) => +_);
// console.log(arr);
// console.log(heapSort(arr, arr.length));
// console.log(radixSort(arr, 9));
