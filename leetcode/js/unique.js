// !不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。
function unique1(arr) {
  return Array.from(new Set(arr));
}

// * 原理是new Set时默认key==value,所以已经创建的key值会被覆写只保留一个键值对。
const s = new Set(["val1", "val2", "val3", "val1"]);
// console.log("🚀 ~ file: unique.js ~ line 8 ~ s", s); //{size: 3, val1, val2, val3}

// 进行简化
function unique1_1(arr) {
  return [...new Set(arr)];
}

// ! 两成for ! //NaN和{}没有去重，两个null直接消失了
function unique2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// ! 利用indexOf去重 //NaN和{}没有去重，两个null直接消失了
function unique3(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (tmp.indexOf(arr[i]) === -1) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
}
//  排序加冒泡 // ! NaN和{}没有去重，两个null直接消失了
function unique4(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  arr = arr.sort();
  let tmpArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      tmpArr.push(arr[i]);
    }
  }
  return tmpArr;
}
// includes 类似于indexof // ! {}没有去重
function unique5(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  let tmpArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!tmpArr.includes(arr[i])) {
      tmpArr.push(arr[i]);
    }
  }
  return tmpArr;
}
// hasOwnProperty // * 所有的都去重了
function unique6(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  let obj = {};
  return arr.filter(function (item, index, arr) {
    console.log(typeof item + item);
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
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
console.log(arr);
console.log(unique6(arr));
