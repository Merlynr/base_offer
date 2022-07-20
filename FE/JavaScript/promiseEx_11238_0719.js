// Promise.reject(Error("foo")).catch((e) => {});
// let p = new Promise((resolve, reject) => {
//   try {
//     throw Error("foo");
//   } catch (e) {}
//   resolve("bar");
// });

// setTimeout(console.log, 0, p);
// 期约连锁
// let p1 = new Promise((resolve, reject) => {
//   console.log("p1 executor step 0");
//   setTimeout(resolve, 1000);
// });
// p1.then(
//   () =>
//     new Promise((resolve, reject) => {
//       console.log("p1 executor step 1");
//       setTimeout(resolve, 1000);
//     })
// )
//   .then(
//     () =>
//       new Promise((resolve, reject) => {
//         console.log("p1 executor step 2");
//         setTimeout(resolve, 1000);
//       })
//   )
//   .then(
//     () =>
//       new Promise((resolve, reject) => {
//         console.log("p1 executor step 3");
//         setTimeout(resolve, 1000);
//       })
//   );

// 把生成期约的代码提取到一个工厂函数
function delayedResolve(str) {
  return new Promise((resolve, reject) => {
    console.log(str);
    setTimeout(resolve, 1000);
  });
}

delayedResolve("p1 executor")
  .then(() => delayedResolve("p2 executor"))
  .then(() => delayedResolve("p3 executor"))
  .then(() => delayedResolve("p4 executor"));
