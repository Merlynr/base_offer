function onResolved(id) {
  setTimeout(console.log, 0, id, "resolved");
}
function onRejected(id) {
  setTimeout(console.log, 0, id, "onrejected");
}

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

p1.then(
  () => onResolved("p1"),
  () => onRejected("p1")
);

p2.then(
  () => onResolved("p2"),
  () => onRejected("p2")
);
// 非函数参数都会直接被静默忽略
p1.then("ggg");

// 忽略resolved的写法,减少内存开销
p2.then(null, () => onRejected("p2 not resolved"));

// Promise.prototype.then()返回一个i虚拟的期约实例
let p3 = p1.then();
p3.then(() => onResolved("p3"), null);

let p4 = Promise.resolve();
p4.then(() => console.log("onResolved handler"));
console.log("then returns");

let synchronousResolve;
// 创建一个期约并将解决函数保存在一个局部变量中
let p = new Promise((resolve) => {
  synchronousResolve = function () {
    console.log("1: invoking resolve()");
    resolve();
    console.log("2: resolve() returns");
  };
});
p.then(() => console.log("4: then() handler executes"));
synchronousResolve();
console.log("3: synchronousResolve() returns");
