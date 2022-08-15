/*
 * @Author: Merlynr
 * @Date: 2022-07-28 00:24:07
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-15 11:18:18
 */

// 原始
let Person = function () {};
let p1 = new Person();
console.log(p1 instanceof Person);

function new_instanceOf(child, parent) {
  let parentPrototype = parent.prototype; //不论构造函数还是对象直接指向原型对象
  child = child.__proto__; //孩子不断沿着原型链寻找父亲
  while (1) {
    if (child === null) {
      return false;
    }
    if (child === parentPrototype) {
      return true;
    }
    child = child.__proto__;
  }
}
// Test
var a = [];
var b = {};

function Foo() {}
var c = new Foo();
function child() {}
function father() {}
child.prototype = new father();
var d = new child();

console.log(new_instanceOf(a, Array)); // true
console.log(new_instanceOf(b, Object)); // true
console.log(new_instanceOf(b, Array)); // false
console.log(new_instanceOf(a, Object)); // true
console.log(new_instanceOf(c, Foo)); // true
console.log(new_instanceOf(d, child)); // true
console.log(new_instanceOf(d, father)); // true

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
console.log(getType(a));
