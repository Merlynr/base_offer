let arr = ["foo", "bar", "baz"];

let [a, b] = arr;

console.log(a, b); // foo, bar, baz

// class Counter {
//   // Counter 的实例应该迭代 limit 次
//   constructor(limit) {
//     this.count = 1;
//     this.limit = limit;
//   }
//   next() {
//     if (this.count <= this.limit) {
//       return { done: false, value: this.count++ };
//     } else {
//       return { done: true, value: undefined };
//     }
//   }
//   [Symbol.iterator]() {
//     return this;
//   }
// }

// class Counter {
//   constructor(limit) {
//     this.limit = limit;
//   }
//   [Symbol.iterator]() {
//     let count = 1,
//       limit = this.limit;
//     return {
//       next() {
//         if (count <= limit) {
//           return { done: false, value: count++ };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//   }
// }
// let counter = new Counter(3);
// for (let i of counter) {
//   console.log(i);
// }
// for (let i of counter) {
//   console.log(i);
// }
// for (let i of counter) {
//   console.log(i);
// }

class Counter {
  constructor(limit) {
    this.limit = limit;
  }
  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log("Exiting early");
        return { done: true };
      },
    };
  }
}
let counter1 = new Counter(5);
for (let i of counter1) {
  if (i > 4) {
    break;
  }
  console.log(i);
}

let counter2 = new Counter(5);
try {
  for (let i of counter2) {
    if (i > 2) {
      throw "err";
    }
    console.log(i);
  }
} catch (e) {}

console.log
