import argv from "minimist";
const args = argv(process.argv.slice(2));
import ProgressBar from "progress";

// node process_0821.js  --name=猫🐱
// console.log(args.name);
// args.forEach((val, index) => {
//   console.log(`${index}:${val}`);
// });
console.log("我的%s已经%d岁", args.name, 2);
// 我的猫🐱已经2岁
// console.clear();

const x = 1;
const y = 2;
const z = 3;
// count
console.count("x 的值为 " + x + " 且已经检查了几次？");
console.count("x 的值为 " + x + " 且已经检查了几次？");
console.count("y 的值为 " + y + " 且已经检查了几次？");

// const function2 = () => console.trace();
// const function1 = () => function2();
// function1();

const doSomething = () => console.log("测试");
const measureDoingSomething = () => {
  console.time("doSomething()");
  //做点事，并测量所需的时间。
  doSomething();
  console.log("\x1b[33m%s\x1b[0m", "你好");
  const bar = new ProgressBar(":bar", { total: 10 });
  const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
      clearInterval(timer);
    }
  }, 100);
  console.timeEnd("doSomething()");
};
measureDoingSomething();
