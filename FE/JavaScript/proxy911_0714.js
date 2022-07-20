/*
 * @Author: Merlynr
 * @Date: 2022-07-14 10:28:14
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-14 17:31:44
 */
const target = {
  name: "target",
};
// * 代理
const handler = {
  // 配置捕获器
  get(trapTarget, property, receiver) {
    console.log(
      "🚀 ~ file: proxy911_0714.js ~ line 14 ~ get ~ receiver",
      receiver
    );
    console.log("target name is " + trapTarget.name);
  },
  getArguments() {
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

target.name = "new target name";

// console.log(target.name);
// console.log(proxy.name);
// handler.get();
proxy.name;

if (!"a" in window) {
  var a = 1;
}
console.log(a);
