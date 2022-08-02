/*
 * @Author: Merlynr
 * @Date: 2022-08-01 14:54:20
 * @Last Modified by:   Merlynr
 * @Last Modified time: 2022-08-01 14:54:20
 * 原数组[[0],[2,3,4],1,[1,[2,3]]]，写一段代码，将该数组扁平化，输出[0,2,3,4,1,1,2,3] Array.prototype.flat()
 */
function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat([...arr[i]]);
    } else {
      tmp.push(arr[i]);
    }
  }
}
let tmp = [];
flat([[0], [2, 3, 4], 1, [1, [2, 3]]]);
console.log(tmp);
