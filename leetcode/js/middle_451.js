/**
 * @param {string} s
 * @return {string}
 * 给定一个字符串 s ，根据字符出现的 频率 对其进行 降序排序 。一个字符出现的 频率 是它出现在字符串中的次数。
 * 返回 已排序的字符串 。如果有多个答案，返回其中任何一个。
 */
var frequencySort = function (s) {
  if (s.length < 2) {
    return s;
  }
  let arr = s.split(""),
    n = arr.length,
    tmp = new Map(),
    res = "";
  for (let i = n - 1; i >= 0; i--) {
    if (tmp.has(arr[i])) {
      tmp.set(arr[i], tmp.get(arr[i]) + 1);
    } else {
      tmp.set(arr[i], 1);
    }
  }
  console.log(tmp);
  for (let [key, val] of tmp) {
    res += key.repeat(val);
  }
  return res;
};

console.log(frequencySort("raaeaedere"));
