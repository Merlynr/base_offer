/*
 * @Author: Merlynr
 * @Date: 2022-07-22 13:13:10
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-22 13:32:08
 */
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf);
let date = "December 11,1195 03:02:11";
// date.prototype.callFn = callFn();
callFn(date, isDateValid);

function callFn(param, callback) {
  let param_ = JSON.stringify(param) == "" ? "No Param" : param;
  let res = callback(param_);
  console.log("🚀 ~ file: oneLine.js ~ line 14 ~ callFn ~ res", res);
  return res;
}
