// let text = "000-00-0000";
// let pattern = /\d{3}-\d{2}-\d{4}/;
// if (pattern.test(text)) {
// console.log("The pattern was matched.");
// }

let text = "this has been a short summer";
let pattern = /(..)or(.)/g;
if (pattern.test(text)) {
console.log(RegExp.$1); // sh
console.log(RegExp.$2); // t
}