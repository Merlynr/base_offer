// let person = {
//   name: "Matt",
//   age: 27,
// };
// let { name, age } = person;
// console.log(name); // Matt
// console.log(age); // 27

let { length } = "foobar";
console.log(length); // 6
let { constructor: c } = 4;
console.log(c === Number); // true
// let { _ } = null; //无法重新声明块范围变量"_"
// let { _ } = undefined; //无法重新声明块范围变量"_"


const o = {
    foo: 'bar',
    baz: 1,
    qux: {}
};
console.log("🚀 ~ file: object_obj.js ~ line 22 ~ o", o)
console.log(Object.values(o));
console.log(Object.values(o)[2] === o.qux);
console.log(Object.entries(o)[2][1] === o.qux);

String.prototype.startsWith = function (text) {
    return this.indexOf(text) === 0;
};
let msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true