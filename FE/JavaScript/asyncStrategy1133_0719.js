async function sleep(delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay));
}

async function foo() {
  const t0 = Date.now();
  await sleep(2500);
  console.log(Date.now() - t0);
}
// foo();

async function randomDelay(id) {
  const delay = Math.random() * 1000;
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`${id} finished`);
      resolve();
    }, delay)
  );
}

async function foo() {
  const t0 = Date.now();
  await randomDelay(0);
  await randomDelay(1);
  await randomDelay(2);
  await randomDelay(3);
  await randomDelay(4);
  console.log(`${Date.now() - t0}ms elapsed`);
}

// foo();

async function bar() {
  const t0 = Date.now();
  for (let i = 0; i < 5; i++) {
    await randomDelay(i);
  }
  console.log(`${Date.now() - t0}ms elapsed`);
}
// bar();
// 平行加速
async function baz() {
  const t0 = Date.now();
  const p0 = randomDelay(0);
  const p1 = randomDelay(1);
  const p2 = randomDelay(2);
  const p3 = randomDelay(3);
  const p4 = randomDelay(4);
  await p0;
  await p1;
  await p2;
  await p3;
  await p4;
  setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
}

// baz();

async function bax() {
  const t0 = Date.now();
  const promises = Array(5)
    .fill(null)
    .flatMap((_, i) => randomDelay(i));
  for (const p of promises) {
    await p;
  }
  console.log(`${Date.now() - t0}ms elapsed`);
}
bax();

// function addTwo(x) {
//   return x + 2;
// }
// function addThree(x) {
//   return x + 3;
// }
// function addFive(x) {
//   return x + 5;
// }

async function addTwo(x) {
  return x + 2;
}
async function addThree(x) {
  return x + 3;
}
async function addFive(x) {
  return x + 5;
}
async function addTen(x) {
  for (const fn of [addTwo, addThree, addFive]) {
    x = await fn(x);
  }
  return x;
}
addTen(9).then(console.log);
