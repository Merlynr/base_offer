/*
 * @Author: Merlynr
 * @Date: 2022-07-28 20:04:45
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-28 21:31:57
 */
async function* ints() {
  // 每 1000 毫秒生成一个递增的整数
  for (let i = 0; i < 5; ++i) {
    yield await new Promise((resolve) => setTimeout(resolve, 1000, i));
  }
}
const readableStream = new ReadableStream({
  async start(controller) {
    for await (let chunk of ints()) {
      controller.enqueue(chunk);
    }
    controller.close();
  },
});

console.log(readableStream.locked); // false
const readableStreamDefaultReader = readableStream.getReader();
console.log(readableStream.locked); // true

// 消费者
(async function () {
  while (1) {
    const { done, value } = await readableStreamDefaultReader.read();
    if (done) {
      break;
    } else {
      console.log(value);
    }
  }
})();
const readline = require("readline");
var line = readline().split(" ");
let arr = [...line];
print(arr);
