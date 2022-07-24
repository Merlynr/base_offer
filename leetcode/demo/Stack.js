/*
 * @Author: Merlynr
 * @Date: 2022-07-23 23:09:17
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-24 16:07:31
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

//实现一个特殊的栈，实现栈的基础功能的同时，再返回栈中最小元素的操作
class GetMinClass {
  constructor() {
    this.normStack = new Stack();
    this.minStack = new Stack();
  }
  // 入栈
  push(item) {
    if (JSON.stringify(this.minStack.data) === "[]") {
      this.minStack.push(item);
    } else if (item < this.getMin()) {
      this.minStack.clear();
      this.minStack.push(item);
    }
    this.normStack.push(item);
  }
  // 出栈
  pop() {
    if (JSON.stringify(this.normStack) === "[]") {
      throw new Error("stack is empty");
    }
    let v = this.normStack.pop();
    return v;
  }
  // 取最小值
  getMin() {
    if (JSON.stringify(this.minStack.data) === "[]") {
      throw new Error("stack is empty");
    }
    return this.minStack.data[this.minStack.data.length - 1];
  }
}

let num = 31415926;
let arr = JSON.stringify(num)
  .split("")
  .map((_) => +_);
let minStack = new GetMinClass();
minStack.push(3);
minStack.push(1);
minStack.push(4);
minStack.push(1);
minStack.push(5);
minStack.push(9);
console.log(minStack.getMin(), minStack.pop());

module.exports = {
  Stack,
};
