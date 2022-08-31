// @algorithm @lc id=100160 lang=javascript
// @title string-to-url-lcci
import * as a from "algm";

// @test("Mr John Smith    ",13)="Mr%20John%20Smith"
// @author Merlynr
// @test("Mr John Smith ",13)="Mr%20John%20Smith"
// @test("               ",5)="%20%20%20%20%20"
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  return S.replace(/\s/g, (s, i) => (i >= length ? "" : "%20"));
};
