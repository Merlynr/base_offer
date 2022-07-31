/*
 * @Author: Merlynr
 * @Date: 2022-07-31 22:32:02
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-31 23:23:18
 */
const lines = require("readline");
// const rl = lines.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const myArray = [];
// let limit = 2;
// rl.on("line", (data) => {
//   while (limit) {
//     let arr = data
//       .trim()
//       .split(" ")
//       .map((n) => +n);
//     if (
//       1 <= arr[0] &&
//       arr[1] <= 1000 &&
//       typeof arr[0] === "number" &&
//       arr[0] % 1 === 0 &&
//       typeof arr[1] === "number" &&
//       arr[1] % 1 === 0
//     ) {
//       myArray.push(arr);
//       if (limit === myArray.length) {
//         let res = doDeal(myArray);
//         console.log(res[0] + "\n" + res[1]);
//       }
//     }
//     limit--;
//   }
// });
// function doDeal(input) {
//   let res = [];
//   for (let i = 0; i < input.length; i++) {
//     res.push(
//       myArray[i].reduce(function (a, b) {
//         return a + b;
//       })
//     );
//   }
//   return res;
// }
var n;
while ((n = readline())) {
  var s = n.split(" ");
  console.log(parseInt(s[0]) + parseInt(s[1]));
}
