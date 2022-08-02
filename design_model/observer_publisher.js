/*
 * @Author: Merlynr
 * @Date: 2022-08-02 14:07:21
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-02 14:47:48
 */
// * 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`目标者通知我了，她变了，我是${this.name}`);
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }
  add(observer) {
    this.observers.push(observer);
  }
  remove(observer) {
    this.observers = this.observers.filter(function (item, index, arr) {
      return observer !== item;
    });
  }
  notify() {
    for (let observer of this.observers) {
      observer.update();
    }
  }
}

let obs1 = new Observer("天眼");
let obs2 = new Observer("天眼1");

let sub1 = new Subject();
let sub2 = new Subject();
let sub3 = new Subject();

sub1.add(obs1);
sub2.add(obs2);
sub3.add(obs1);
sub3.add(obs2);

sub1.notify();
sub2.notify();
sub3.notify();

// ! 事件中心
let pubSub = {
  list: {},
  // 订阅
  subscribe: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  // 发布
  publish: function (key, ...args) {
    // all fn
    for (let fn of this.list[key]) {
      fn.call(this, ...args);
    }
  },
  // 取消订阅1
  unSubscribe: function (key, fn) {
    let fnList = this.list[key];
    if (!fnList) return false;
    if (!fn) {
      // * 不传入指定取消的订阅方法，则清空所有key下的订阅
      fnList && (fnList.length = 0);
    } else {
      fnList.forEach((item, index) => {
        if (item === fn) {
          fnList.splice(index, 1);
        }
      });
    }
  },
};
let onwork1 = function (name) {
  console.log(name, "llll");
};
let onwork2 = function (name) {
  console.log(name, "rrrr");
};
// 订阅
pubSub.subscribe("onwork", onwork1);
pubSub.subscribe("onwork", onwork2);
pubSub.subscribe("offwork", (time) => {
  console.log(`下班了：${time}`);
});
pubSub.subscribe("launch", (time) => {
  console.log(`吃饭了：${time}`);
});

// 发布
pubSub.publish("onwork", "12:00");
pubSub.publish("onwork", "12:00:01");
pubSub.publish("offwork", "18:00:00");
pubSub.publish("launch", "12:00:00");

// 取消订阅
pubSub.unSubscribe("onwork", onwork1);

// 发布
pubSub.publish("onwork", "12:00");
pubSub.publish("offwork", "18:00:00");
pubSub.publish("launch", "12:00:00");
