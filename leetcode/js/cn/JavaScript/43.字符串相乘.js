// @algorithm @lc id=43 lang=javascript
// @title multiply-strings
// import * as a from "algm";

// @author Merlynr
// @test("2","3")="6"
// @test("123","456")="56088"
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// const log = console.log.bind(console);
const log = (_) => {};
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let len_1 = num1.length,
    len_2 = num2.length,
    res = new Array(len_1 + len_2).fill(0);
  // 结果最多为 m + n 位数
  for (let i = len_1 - 1; i >= 0; i--) {
    for (let j = len_2 - 1; j >= 0; j--) {
      // 从个位数开始，逐步相乘
      let mul = num1[i] * num2[j];
      // 乘积在结果数组中对应的位置
      let p1 = i + j,
        p2 = i + j + 1,
        // 对结果进行累加
        sum = mul + res[p2];
      res[p1] += ~~(sum / 10);
      res[p2] = sum % 10;
    }
  }
  if (res[0] === 0) res.shift();
  return res.join("");
};
log(multiply("123", "456"));
