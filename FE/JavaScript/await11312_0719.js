let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p.then((x) => console.log("promise", x)); // 3

async function foo() {
  console.log("p");
  let p = new Promise((resolve, reject) => setTimeout(reject, 1000, 3));
  console.log("await", await p);
  console.log("pp");
}

// foo().catch(console.log);

async function foo() {
  console.log(await Promise.resolve("foo"));
}
async function bar() {
  console.log(await "bar");
}
async function baz() {
  console.log("baz");
}

foo();
bar();
baz();

async function foo1() {
  console.log(2);
  await null;
  console.log(4);
}
console.log(1);
foo1();
console.log(3);
