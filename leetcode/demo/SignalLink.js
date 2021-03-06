/*
 * @Author: Merlynr
 * @Date: 2022-07-24 17:47:39
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-24 19:17:08
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  /**
   * @param  {} val=null
   */
  constructor(val = null) {
    this.head = null;
    this.len = 0;
    if (val) {
      this.head = new Node(val);
      this.len = 1;
    }
  }

  append(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        // 找到 next 指向为空的节点
        current = current.next;
      }
      current.next = node;
    }
    this.len += 1;
  }

  insert(pos, val) {
    if (pos > this.len || pos < 0) {
      throw new Error("插入位置不合理");
    }
    const node = new Node(val);
    if (pos === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let current = this.head;
      let prev = null;
      while (index < pos) {
        // 遍历链表找到指定位置的节点，并记录下前一个节点和该位置原节点
        prev = current;
        current = current.next;
        index += 1;
      }
      node.next = current;
      prev.next = node;
    }
    this.len++;
  }
}

let link = new LinkedList(1);
link.append(2);
link.append(5);
link.insert(1, 9);
console.log(link);
debugger;
