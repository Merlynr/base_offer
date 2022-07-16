function Fun() {}

Fun.prototype.a = 1;
let f1 = new Fun();
Fun.prototype = {
  b: 2,
  c: 3,
};
console.log(f1.prototype);

let f2 = new Fun();
Fun.prototype.d = 4;
debugger;
console.log("🚀 ~ file: 原型链0715.js ~ line 4 ~ a", f1.a);
console.log("🚀 ~ file: 原型链0715.js ~ line 9 ~ b", f1.b);
console.log("🚀 ~ file: 原型链0715.js ~ line 9 ~ c", f2.c);
console.log("🚀 ~ file: 原型链0715.js ~ line 11 ~ d", f2.d);
console.log("🚀 ~ file: 原型链0715.js ~ line 4 ~ a", f2.a);
