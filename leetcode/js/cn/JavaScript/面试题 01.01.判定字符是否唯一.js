// @algorithm @lc id=100158 lang=javascript
// @title is-unique-lcci
import * as a from "algm";

// @author Merlynr
// @test("leetcode")=false
// @test("abc")=true
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  return astr.length === new Set(astr).size;
};
z``;
