import inquirer from "inquirer";
import { say } from "cowsay";
import fs from "fs";

var questions = [
  {
    type: "input",
    name: "name",
    message: "你叫什么名字?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`你好 ${answers["name"]}!`);
  console.log(say({ text: "grazing in the browser" }));
});

const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  new Promise((resolve, reject) => {
    console.log("foo1");

    resolve("应该在 baz 之后、bar 之前");
  }).then((resolve) => console.log(resolve));
  baz();
};

foo();

const myFunction = () => {
  // 做些事情
  const idx = setTimeout(myFunction, 1000);

  i--;
  if (i === 0) {
    console.log("myFunction");
    clearTimeout(idx);
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState === 4) {
    //     xhr.status === 200
    //       ? console.log(xhr.responseText)
    //       : console.error("出错");
    //   }
    // };
    // xhr.open("GET", "http://nodejs.cn");
    // xhr.send();

    const getFile = (fileName) => {
      return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
          if (err) {
            reject(err); // 调用 `reject` 会导致 promise 失败，无论是否传入错误作为参数，
            return; // 且不再进行下去。
          }
          resolve(data);
        });
      });
    };

    getFile("package.json")
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
};
var i = 5;
setTimeout(myFunction, 1000);
