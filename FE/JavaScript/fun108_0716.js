function createComparisonFunction(propertyName) {
  return function (o1, o2) {
    let v1 = o1[propertyName];
    let v2 = o2[propertyName];
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    } else {
      return 0;
    }
  };
}

let data = [
  { name: "Zachary", age: 28 },
  { name: "Nicholas", age: 29 },
];

data.sort(createComparisonFunction("age"));
console.log("🚀 ~ file: fun108_0716.js ~ line 22 ~ name", data);

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// 通过arguments对象的callee解耦
function factorialByCallee(num) {
  return num <= 1 ? 1 : num * arguments.callee(num - 1);
}

let trueFactorial = factorialByCallee;

factorialByCallee = function () {
  return 0;
};

let falseFactorial = factorial;

factorial = function () {
  return 0;
};
// 已解耦
console.log(trueFactorial(5));
console.log(factorialByCallee(5));
// 未解耦
console.log(falseFactorial(5));
console.log(factorial(5));
let royaltyName = "Lao Wang";

function King() {
  this.royaltyName = "Henry";
  setTimeout(() => console.log(this.royaltyName), 1000);
}
function Queen() {
  this.royaltyName = "Elizabeth";
  // this 引用 window 对象
  setTimeout(function () {
    console.log(royaltyName);
  }, 1000);
}
new King();
new Queen();
// debugger;

function outer() {
  inner();
}

function inner() {
  // console.log(inner.caller);
  console.log(arguments.callee.caller);
}

outer();
