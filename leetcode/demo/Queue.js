/*
 * @Author: Merlynr
 * @Date: 2022-07-23 23:09:48
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-23 23:10:34
 */

//* 先进先出（FIFO）

class Queue {
  constructor() {
    this.data = [];
  }
  // 入队
  // 入栈
  enqueue(item) {
    this.data.push(item);
  }
  // 出栈
  dequeue() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data.shift();
  }
  clear() {
    this.data = [];
  }
  get length() {
    return this.data.length;
  }
}
