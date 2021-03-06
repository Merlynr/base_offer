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

function* generatorFn() {
  console.log("foobar");
}
// 初次调用生成器函数并不会打印日志
let generatorObject = generatorFn();
generatorObject.next();

function* range(start, end) {
  while (end > start) {
    yield start++;
  }
}
for (const x of range(4, 7)) {
  console.log(x);
}

function* zeroes(n) {
  while (n--) {
    yield 0;
  }
}
console.log(Array.from(zeroes(8)));

function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n - 1;
  }
}
for (const x of nTimes(3)) {
  console.log(x); //0 1 2
}
let book = {
  year_: 2017,
  edition: 1,
};
Object.defineProperty(book, "year", {
  get() {
    return this.year_;
  },
  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue;
      this.edition += newValue - 2017;
    }
  },
});
book.year = 2018;
console.log(book.edition); //2
console.log(book.edition); //2

let book1 = {};
Object.defineProperties(book1, {
  year_: {
    value: 2017,
  },
  edition: {
    value: 1,
  },
  year: {
    get: function () {
      return this.year_;
    },
    set: function (newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    },
  },
});
let decriptor = Object.getOwnPropertyDescriptor(book, "year_");
let decriptor1 = Object.getOwnPropertyDescriptor(book1, "year_");
console.log(decriptor);
console.log(decriptor1);

let dest, src, result;
/**
 * 简单复制
 */
dest = {};
src = { id: "src" };
result = Object.assign(dest, src);
// Object.assign 修改目标对象
// 也会返回修改后的目标对象
console.log(src);
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); // { id: src }
src.id = "sdsa";
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(src.id); // { id: src }
console.log(dest.id);
