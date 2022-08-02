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
// * done // hasOwnProperty // * 所有的都去重—了,根据对象的k-v进行顾虑
function unique6(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  let obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}
function unique6_1(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return;
  }
  let obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = 1);
  });
}
// * done
function unique7(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  });
}
// * 创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。
function unique8(arr) {
  let map = new Map();
  let array = new Array(); // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    // 引用类型无法判断唯一
    if (map.has(arr[i])) {
      // 如果有该key值
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false); // 如果没有该key值
      array.push(arr[i]);
    }
  }
  return array;
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
console.log(unique8(arr));
debugger;
