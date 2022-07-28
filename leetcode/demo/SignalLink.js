/*
 * @Author: Merlynr
 * @Date: 2022-07-24 17:47:39
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-28 19:47:29
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
  find(val) {
    let current = this.head;
    while (current && current.val !== val) {
      current = current.next;
    }
    return current;
  }
  findOfIndex(idx) {
    if (idx < 0 || idx > this.len) {
      throw new Error("不存在");
    }
    if (idx === 0) {
      return this.head;
    }
    let i = 0;
    let current = this.head;
    while (current.val) {
      if (i === idx) {
        return current;
      }
      current = current.next;
      i++;
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
  // 删除值
  remove(val) {
    if (!this.find(val)) {
      return;
    }
    if (val === this.head) {
      this.head = this.head.next;
      this.len--;
      return;
    }

    let current = this.head;
    while (current.next) {
      let preNode = current;
      current = current.next;
      if (current.val === val) {
        preNode.next = current.next;
        // p不动c重新走
        current = preNode;
        this.len--;
      }
    }
  }
  // 删除索引
  removeOfIndex(idx) {
    if (idx < 0 || idx > this.len) {
      throw new Error("不存在");
    }
    if (idx === 0) {
      this.head = this.head.next;
      this.len--;
      return;
    }
    let preNode = this.findOfIndex(idx - 1);
    preNode.next = preNode.next.next;
    this.len--;
  }
  reserve() {
    let preNode = null;
    let currentNode = this.head;
    // TODO 理解
    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = preNode;
      preNode = currentNode;
      currentNode = nextNode;
    }
    this.head = preNode;
  }
}

let link = new LinkedList(1);
link.append(2);
link.append(5);
link.insert(1, 9);
link.append(5);
link.append(5);
link.append(5);
link.append(3);
link.append(4);

let node_2 = link.find(2);
// console.log("🚀 ~ file: SignalLink.js ~ line 80 ~ node_2", node_2, node_2.next);
// console.log(link);
// link.remove(5);
// *0开始计数
let node_9 = link.removeOfIndex(0);
link.reserve();
console.log(link);
