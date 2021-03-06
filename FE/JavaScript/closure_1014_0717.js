"use strict";

var zero = function (f) {
  return function (x) {
    return x;
  };
};
// console.log("π ~ file: closure_1014_0717.js ~ line 8 ~ zero ~ zero", zero);

var one = function (f) {
  return function (x) {
    return f(x);
  };
};
// console.log("π ~ file: closure_1014_0717.js ~ line 15 ~ one ~ one", one);

function add(m, n) {
  return function (f) {
    return function (x) {
      return m(f)(n(f)(x));
    };
  };
}

var two = add(one, one);
two(function () {
  console.log("print 2 times");
})();
// ε¨ζ΅θ§ε¨δΈ­θΏθ‘
window.identity = "this window";
let obj = {
  identity: "My object",
  getIdentityFun() {
    return function () {
      return this.identity;
    };
  },
};
console.log(
  "π ~ file: closure_1014_0717.js ~ line 37 ~ obj",
  obj.getIdentityFun()()
);
