/*
 * @Author: Merlynr
 * @Date: 2022-08-01 15:36:43
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-08-01 16:45:01
 * 请判断一个链表是否为回文链表。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    let len = s.length;
    let sMap = new Map();
    for (let i = 0; i < len; i++) {
      if (!sMap.has(s[i])) {
        sMap.set(s[i], 1);
      } else {
        let n = sMap.get(s[i]);
        sMap.set(s[i], ++n);
      }
    }
    while (len >= 0) {
      len--;
      if (sMap.get(t[len]) > 0) {
        let n = sMap.get(t[len]);
        sMap.set(t[len], --n);
      }
      if (sMap.get(t[len]) === 0) {
        sMap.delete(t[len]);
      }
    }
    console.log(sMap);
    if (sMap.size === 0) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
var isAnagram1 = function (s, t) {
  if (s.length === t.length) {
    let tA = [...t],
      len = s.length;
    for (let i = 0; i < len; i++) {
      let index = tA.indexOf(s[i]);
      if (index !== -1) {
        tA.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};
console.log(isAnagram1("anagram", "nagaram"));
