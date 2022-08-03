/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (typeof numRows !== "number" || numRows < 1) {
    return;
  }
  let res = [];
  for (let i = 0; i < numRows; i++) {
    let tmp = [];
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        tmp.push(1);
      } else {
        tmp.push(
          typeof res[i - 1][j - 1] === "number"
            ? res[i - 1][j - 1] + res[i - 1][j]
            : res[i - 1][j]
        );
      }
    }
    res.push(tmp);
  }
  return res;
};

console.log(generate(5));
debugger;
