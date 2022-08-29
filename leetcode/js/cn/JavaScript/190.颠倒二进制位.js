// @algorithm @lc id=190 lang=javascript
// @title reverse-bits
// @author Merlynr
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n = n >> 1;
  }
  // 为什么要 >>> 0 呢，一位javascript没有无符号整数，全是有符号的
  // 不>>>0的话，得出来的值是负数，但是无符号整数是没有符号的
  // javascript 有符号转化为无符号的方法就是>>>0
  return res >>> 0;
};
