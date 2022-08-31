/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param n int整型 正整数
 * @return int整型
 */
function getNumber(n) {
  // write code here
  let dp = new Array(n + 1).fill(0).map(() => new Array(10).fill(Infinity));
  for (let i = 0; i <= n; i++) dp[i][0] = 999999;
  for (let j = 0; j <= 9; j++) dp[0][j] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 9; j++) {
      //如果j*j大于i，则不能将j加入进来
      if (j * j > i) dp[i][j] = dp[i][j - 1];
      else {
        let tmp = dp[i - j * j][j] + "";
        let arr = tmp.split("");
        arr.push(j + "");
        let num = Number(arr.sort().join(""));
        dp[i][j] = dp[i][j - 1] < num ? dp[i][j - 1] : num;
      }
    }
  }
  return dp[n][9];
}
module.exports = {
  getNumber: getNumber,
};

console.log(getNumber(63));
