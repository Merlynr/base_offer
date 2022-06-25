let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
function aa() {
  let numbers = [1, 2, 3, 4, 4, 3, 2, 1];
  return number;
}

let number = [1, 2, 3, 4, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult);
let filterResult = numbers.filter((item, index, array) => item > 2, aa());
console.log(filterResult);

let values = [1, 2, 3, 4, 5];
let sum = values.reduce((prev, cur) => prev + cur);
console.log(sum);
const buf = new ArrayBuffer(2);
const view = new DataView(buf);
view.setUint8(0, 255);
console.log(view.getInt8(0));