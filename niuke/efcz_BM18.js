function Find(target, array) {
  // write code here
  // TODO 确定符合的数组
  // TODO 在符合的数组中查找
  let m = array.length,
    n = array[0].length,
    tmp = [],
    flag = false;
  for (let i = m - 1; i >= 0; i--) {
    if (array[i][0] <= target && array[i][n - 1] >= target) {
      for (let j = n - 1; j >= 0; j--) {
        if (array[i][j] === target) {
          return true;
        }
      }
    }
  }
  return flag;
}
module.exports = {
  Find: Find,
};

console.log(
  Find(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);
