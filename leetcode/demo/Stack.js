/*
 * @Author: Merlynr
 * @Date: 2022-07-23 23:09:17
 * @Last Modified by:   Merlynr
 * @Last Modified time: 2022-07-23 23:09:17
 */
// * 后进先出（LIFO）
class Stack {
  constructor() {
    this.data = [];
  }
  // 入栈
  push(item) {
    this.data.push(item);
  }
  // 出栈
  pop() {
    // 判断是否为空
    if (this.data.length === 0) {
      return null;
    }
    return this.data.pop();
  }
  // 清空
  clear() {
    this.data = [];
  }
  getLength() {
    return this.data.length;
  }
}

module.exports = {
  Stack,
};
