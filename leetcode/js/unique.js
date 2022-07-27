//不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。
function unique1(arr) {
  return Array.from(new Set(arr));
}

// * 原理是new Set时默认key==value,所以已经创建的key值会被覆写只保留一个键值对。
const s = new Set(["val1", "val2", "val3", "val1"]);
console.log("🚀 ~ file: unique.js ~ line 8 ~ s", s);

// 进行简化
function unique1_1(arr) {
  return [...new Set(arr)];
}

// test
var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
console.log(unique1_1(arr));
