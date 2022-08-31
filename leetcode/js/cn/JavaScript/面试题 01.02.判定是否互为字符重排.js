// @algorithm @lc id=100159 lang=javascript
// @title check-permutation-lcci
import * as a from "algm";

// @author Merlynr
// @test("abc","bca")=true
// @test("abc","bad")=false
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let s_1 = s1.split(""),
    s_2 = s2.split("");
  for (let i = s1.length - 1; i >= 0; i--) {
    let idx = s_2.indexOf(s_1[i]);
    if (idx === -1) {
      return false;
    }
    s_2.splice(idx, 1);
  }
  return true;
};
