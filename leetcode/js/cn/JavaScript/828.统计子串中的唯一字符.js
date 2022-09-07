// @algorithm @lc id=855 lang=javascript
// @title count-unique-characters-of-all-substrings-of-a-given-string
// import * as a from "algm";

// @author Merlynr
// @test("ABC")=10
// @test("ABA")=8
// @test("LEETCODE")=92
/**
 * @param {string} s
 * @return {number}
 */
// const log = console.log.bind(console);
const log = (_) => {};
var uniqueLetterString = function (s) {
  const index = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!index.has(c)) {
      index.set(c, [-1]);
    }
    index.get(c).push(i);
  }
  log(index);
  let res = 0;
  for (let [k, arr] of index.entries()) {
    arr.push(s.length);
    log(arr);
    for (let i = 1; i < arr.length - 1; i++) {
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
    }
  }
  return res;
};
log(uniqueLetterString("ABC"));
