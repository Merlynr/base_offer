function strReverse(str) {
  if (str.length === 1) {
    return str;
  }
  return str.slice(-1) + strReverse(str.slice(0, -1));
}

// strReverse("hello world");
console.log(
  "🚀 ~ file: test.js ~ line 5 ~ strReverse(hello world);",
  strReverse("hello world")
);
