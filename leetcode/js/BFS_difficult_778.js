/**
 * @param {number[][]} grid
 * @return {number}
 */
// TODO
var swimInWater = function (grid) {
  const ARP = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  //   记录路径
  let dp = new Array(grid.length)
    .fill(0)
    .map((i) => new Array(gird[0].length).fill(0));
  let res = 0;
  let stack = [0, 0];
  while (stack.length > 0) {
    let [row, col] = stack.shift();
    //用以记录当前已经保存的所有能走的点
    result = Math.max(result, grid[row][col]);
  }
};
