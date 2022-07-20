let p = new Promise((resolve, reject) => setTimeout(reject, 1000, 3));
p.catch(notHndler);
function handler(x) {
  console.log("handler", x);
}
function notHndler(x) {
  console.log("reject ", x);
}

async function foo() {
  console.log(1);
  return 2.5;
}
foo().then(console.log);
console.log(2);
async function foo1() {
  console.log(2.4);
  return Promise.resolve(2.6);
}
foo1().then(console.log);
