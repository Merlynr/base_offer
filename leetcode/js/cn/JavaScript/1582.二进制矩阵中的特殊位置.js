// @algorithm @lc id=1704 lang=javascript
// @title special-positions-in-a-binary-matrix
// import * as a from "algm";

// @author Merlynr
// @test([[1,0,0],[0,0,1],[1,0,0]])=1
// @test([[1,0,0],[0,1,0],[0,0,1]])=3
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let res = 0,
    len = mat.length;
  for (let i = 0; i < len; i++) {
    let index = mat[i].indexOf(1);
    if (index === -1 || index !== mat[i].lastIndexOf(1)) {
      continue;
    }
    let isSignal = true;
    for (let j = 0; j < len; j++) {
      if (i !== j && mat[j][index] === 1) {
        isSignal = false;
        break;
      }
    }
    if (isSignal) {
      res++;
    }
  }
  return res;
};
console.log(
  numSpecial([
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);
