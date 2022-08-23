// @algorithm @lc id=171 lang=javascript
// @title excel-sheet-column-number

// @author Merlynr
// @test("A")=1
// @test("AB")=28
// @test("ZY")=701
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let res = 0,
    len = columnTitle.length - 1;
  for (let i = len; i >= 0; i--) {
    res +=
      26 ** (len - i) * (columnTitle[i].charCodeAt() - "A".charCodeAt() + 1);
  }
  return res;
};
titleToNumber("A");
