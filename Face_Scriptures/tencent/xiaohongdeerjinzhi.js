/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function minCnt(s) {
  // write code here
  var myRe = /[0]/g;
  let st = s;
  var myArray = st.replace(myRe, "");
  console.log(myArray);
}
module.exports = {
  minCnt: minCnt,
};
minCnt("010101");
