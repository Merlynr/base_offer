// /$$
//  $ @Author: Merlynr
//  $ @Date: 2022-03-17 17:28:18
//  $ @LastEditTime: 2022-03-17 19:09:00
//  $ @LastEditors: your name
//  $ @Description: 
//  $ @FilePath: \byYourself\leetcode\js\array_easy_1.js
//  $ @少年强，中国强！
//  $/
function arrayEasy1(nums, target) {
    let first = 0;
    let last = 0;
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let currInx = target - nums[i];
        !hashMap.has(currInx)? hashMap.set(nums[i], i):(first = hashMap.get(currInx),last = i)
    }
    return [first, last];
}

console.log(arrayEasy1([2, 7, 11, 15], 9))
