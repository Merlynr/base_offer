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
let { _ } = null; //无法重新声明块范围变量"_"
let { _ } = undefined; //无法重新声明块范围变量"_"
