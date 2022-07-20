// let p = new Promise(() => {});

// setTimeout(console.log, 0, Promise.resolve(4, 5, 6));

// new Promise(() => setTimeout(console.log, 1000, "executor"));
// setTimeout(console.log, 0, "promise init");

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000);
// });
// setTimeout(console.log, 0, p1);
// setTimeout(console.log, 2000, p1);

let p2 = new Promise((resolve, reject) => reject(3));
setTimeout(console.log, 0, p2);
p2.then(null, (e) => setTimeout(console.log, 0, e));

// setTimeout(console.log, 0, Promise.reject(Promise.resolve()));

try {
  throw new Error("fail");
} catch (e) {
  console.log(e);
}

try {
  Promise.reject(new Error("fail Promise"));
} catch (e) {
  console.log(e);
}
