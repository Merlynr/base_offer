/*
 * @Author: Merlynr
 * @Date: 2022-07-31 22:24:43
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-31 22:49:30
 * @Url https://juejin.cn/post/7098720380755378207
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (data) {
  let input = data.split(" ");
  let res = doDeal(input);
  console.log(res);
});

function doDeal(input) {
  let res = input;
  return res;
}
