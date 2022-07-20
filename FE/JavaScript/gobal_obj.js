eval("function sayHi() { console.log('hi'); }");
sayHi();

eval("let msg = 'hello world'; console.log(msg)");
// eval("console.log(msg)");
// console.log(msg); // Reference Error: msg is not defined

// 浏览器中window对象
var color = "red";
// function sayColor() {
// console.log(window.color);
// }
// window.sayColor(); // "red"

let global = (function () {
  return this;
})();

console.log(global.color);
