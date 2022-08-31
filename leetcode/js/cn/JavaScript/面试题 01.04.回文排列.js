// @algorithm @lc id=100184 lang=javascript
// @title palindrome-permutation-lcci
import * as a from "algm";

// @test("code")=false
// @test("code")=false
// @author Merlynr
// @test("tactcoa")=true
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  if (s.length < 1) return false;
  let arr = s.split(""),
    map = new Map(),
    res = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!map.has(arr[i]) || map.get(arr[i]) === 0) {
      map.set(arr[i], 1);
    } else if (map.get(arr[i]) === 1) {
      map.set(arr[i], 0);
    }
  }
  for (let [k, v] of map) {
    if (v == 1) {
      res++;
    }
  }
  return res < 2;
};
