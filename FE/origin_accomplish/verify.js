const fn_call = require("./call");
const fn_bind = require("./bind");

function add(a, b) {
  return a + b + this.c;
}

globalThis.c = 4;
let obj = { c: 5 };
// fn_call.call(add, obj, 2, 3);
console.log(
  "🚀 ~ file: verify.js ~ line 10 ~ fn_call.call(add, obj, 2, 3);",
  fn_call.call(add, obj, 2, 3),
  fn_call.call(add, undefined, 2, 3)
);
console.log(
  "🚀 ~ file: verify.js ~ ~ fn_bind;",
  fn_bind.bind(add, obj, 2, 3),
  fn_bind.bind(add, undefined, 2, 3)
);
