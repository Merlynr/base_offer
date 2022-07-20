// 不符合尾调用
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(0)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(1)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(2)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(3)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(4)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(5)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fib ~ fib",
  fib(6)
);

("use strict");

// 尾调用
function fibw(n) {
  return fibImpl(0, 1, n);
}

function fibImpl(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a + b, n - 1);
}

console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(0)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(1)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(2)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(3)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(4)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(5)
);
console.log(
  "🚀 ~ file: fibonacci_sequence_0717.js ~ line 2 ~ fibw ~ fibw",
  fibw(1000)
);
