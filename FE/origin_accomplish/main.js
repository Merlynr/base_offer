/*
 * @Author: Merlynr
 * @Date: 2022-07-30 22:25:38
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-31 22:23:39
 */
// 给 1000 毫秒让工作者线程初始化
var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (data) {
  // 获取输入
  var inputs = data.trim().split(" ");

  // 处理
  var result = deal(inputs);

  // 输出结果
  console.log(result);
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
  var result = "";
  result = inputs;
  // dosomething

  return result;
}
