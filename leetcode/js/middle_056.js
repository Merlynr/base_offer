/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   let p = 0;

//   intervals.sort((a, b) => a[0] - b[0]);

//   while (p < intervals.length - 1) {
//     let p_l = intervals[p][0],
//       p_r = intervals[p][intervals[p].length - 1],
//       pp_l = intervals[p + 1][0],
//       pp_r = intervals[p + 1][intervals[p + 1].length - 1];
//     if (p_r >= pp_l) {
//       let r = Math.max(p_r, pp_r),
//         l = Math.min(p_l, pp_l);
//       intervals.splice(p, 2, [l, r]);
//     } else {
//       p += 1;
//     }
//   }
//   return intervals;
// };
console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
// debugger;
// 优化

var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  let p = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  while (p < intervals.length - 1) {
    let p_l = intervals[p][0],
      p_r = intervals[p][intervals[p].length - 1],
      pp_l = intervals[p + 1][0],
      pp_r = intervals[p + 1][intervals[p + 1].length - 1];
    if (p_r >= pp_l) {
      let r = Math.max(p_r, pp_r),
        l = Math.min(p_l, pp_l);
      intervals.splice(p, 2, [l, r]);
    } else {
      p += 1;
    }
  }
  return intervals;
};
