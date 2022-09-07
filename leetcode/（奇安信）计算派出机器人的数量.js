/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param grid char字符型二维数组
 * @return int整型
 */
function numIslands(grid) {
  // write code here
  let res = 0;
  const dfs = (grid, x, y) => {
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] == 0
    ) {
      return;
    }
    grid[x][y] = 0;
    dfs(grid, x + 1, y);
    dfs(grid, x - 1, y);
    dfs(grid, x, y + 1);
    dfs(grid, x, y - 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j);
        res++;
      }
    }
  }
  return res;
}
module.exports = {
  numIslands: numIslands,
};
