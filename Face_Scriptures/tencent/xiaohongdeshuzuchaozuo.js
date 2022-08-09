/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param a int整型一维数组
 * @param k int整型
 * @param x int整型
 * @return int整型
 */
function minMax(a, k, x) {
  // write code here
  let len = a.length;
  let maxIndex = len - 1;
  while (k--) {
    maxIndex = maxIndexFn(a);
    a[maxIndex] -= x;
  }
  return a[maxIndexFn(a)];
}
function maxIndexFn(arr) {
  let len = arr.length;
  let maxIndex = len - 1;
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}
module.exports = {
  minMax: minMax,
};
console.log(minMax([7, 2, 1], 3, 2));
