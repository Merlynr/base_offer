/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function minCnt(s) {
  // write code here
  let res = 0,
    arr = s.split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (s[i] == 1) {
      res++;
    }
  }
  return --res;
}
module.exports = {
  minCnt: minCnt,
};

console.log(minCnt("111"));
