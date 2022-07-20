// let p = Promise.all([
//   Promise.resolve(),
//   new Promise((resolve, reject) => setTimeout(resolve, 1000)),
// ]);
// setTimeout(console.log, 0, p);
// p.then(() => setTimeout(console.log, 0, "all() resolved"));

let p1 = Promise.resolve("aaa");
let p2 = Promise.resolve("bbb");
let p3 = Promise.reject("ccc");
let p4 = Promise.resolve("ddd");
Promise.all([p1, p2, p3, p4])
  .then((res) => {
    console.log("成功", res);
  })
  .catch((err) => {
    console.log("失败", err);
  });

function addTwo(x) {
  return x + 2;
}
function addThree(x) {
  return x + 3;
}
function addFive(x) {
  return x + 5;
}

// 使用期约进行值传递
function addTen(x) {
  return Promise.resolve(x).then(addTwo).then(addThree).then(addFive);
}

addTen(8).then(console.log);
// 使用 Array.prototype.reduce() 可以写成更简洁的形式：
function addTen1(x) {
  return [addTwo, addThree, addFive].reduce(
    (promise, fn) => promise.then(fn),
    Promise.resolve(x)
  );
}
addTen1(8).then(console.log);

function compose(...fns) {
  return (x) =>
    fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}

let addTen2 = compose(addTwo, addThree, addFive);
addTen(8).then(console.log);

let pp = new Promise(() => {});
console.log(pp);
