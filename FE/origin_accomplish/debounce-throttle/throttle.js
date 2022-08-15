/*
 * @Author: Merlynr
 * @Date: 2022-08-15 21:49:35
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-15 22:02:38
 */
/**
 * @description:节流 基于时间戳
 * @param {Function} handler
 * @param {integer} wait
 */
// function throttle(handler, wait) {
//   let pre = Date.now();
//   return function () {
//     let context = this;
//     let args = arguments;
//     let now = Date.now();
//     if (now - pre >= wait) {
//       console.log(now - pre);
//       handler.apply(context, args);
//       pre = Date.now();
//     }
//   };
// }
/**
 * @description:节流 基于定时器
 * @param {Function} handler
 * @param {integer} wait
 */
function throttle(handler, wait) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    console.log(wait);
    if (!timer) {
      timer = setTimeout(function () {
        handler.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}
