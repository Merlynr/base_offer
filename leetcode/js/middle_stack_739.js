/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  if (!Array.isArray(temperatures) || temperatures.length < 2) {
    return [0];
  }
};

console.log(dailyTemperatures([30, 60, 90]));
