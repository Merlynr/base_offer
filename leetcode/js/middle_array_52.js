/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return;
  }
  let u = 0,
    b = matrix.length - 1,
    l = 0,
    r = matrix[0].length - 1,
    tmp = [];
  while (true) {
    for (let i = l; i <= r; i++) {
      tmp.push(matrix[u][i]);
    }
    if (++u > b) {
      break;
    }
    for (let i = u; i <= b; i++) {
      tmp.push(matrix[i][r]);
    }
    if (--r < l) {
      break;
    }
    for (let i = r; i >= l; i--) {
      tmp.push(matrix[b][i]);
    }
    if (--b < u) {
      break;
    }
    for (let i = b; i >= u; i--) {
      tmp.push(matrix[i][l]);
    }
    if (++l > r) {
      break;
    }
  }
  return tmp;
};
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// matrix1 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// res = spiralOrder(matrix1);
// console.log(res);
