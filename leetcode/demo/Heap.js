class Heap {
  constructor(compare) {
    this.list = [];
    this.compare =
      typeof compare === "function" ? compare : this.defaultCompare;
  }
  // 控制堆升序还是降序
  defaultCompare(a, b) {
    return a > b;
  }
  //   是否为空
  isEmpty() {
    return this.list.length === 0;
  }
  //   数组长度
  getSize() {
    return this.list.length;
  }
  //   最大值
  top() {
    return this.list[0];
  }
  //   删除最大值
  pop() {
    const { list } = this;
    if (list.length === 0) {
      return null;
    }
    this.swap(1, list.length - 1);
    const top = list.pop();
    this.down(1);
    return top;
  }
  //   增加值
  push(val) {
    this.list.push(val);
    this.push(this.list.length);
  }
  //  上浮
  up(k) {
    const { list, parent, compare } = this;

    while (k > 1 && compare(list[k], list[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k);
    }
  }
  //将数据【下沉】到对应位置
  down(k) {
    const { list, left, right, compare } = this;
    const size = this.getSize();
    console.log(size);
    while (left(k) <= size) {
      let _left = left(k);
      if (right(k) <= size && compare(list[right(k)], list[_left])) {
        _left = right(k);
      }
      if (compare(list[k], list[_left])) return;
      this.swap(k, _left);
      k = _left;
    }
  }
  //   数值进行交换,传进来为坐标
  swap(l, r) {
    if (l !== r) {
      this.list[l] ^= this.list[r];
      this.list[r] ^= this.list[l];
      this.list[l] ^= this.list[r];
    }
  }
  //   更加当前节点获得左节点下标
  left = (x) => x << 1;
  //右
  right = (x) => 2 << (1 + 1);
  parent = (x) => Math.floor(x >> 1);
}

exports.Heap = Heap;
