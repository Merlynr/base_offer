/*
 * @Author: Merlynr
 * @Date: 2022-06-18 18:49:02
 * @LastEditTime: 2022-06-18 18:49:16
 * @LastEditors: Merlynr
 * @Description: 
 * @FilePath: \byYourself\FE\JavaScript\reg
 * 少年强，中国强！
 */
let text = "cat, bat, sat, fat";
// let pattern = /.at/gi;
let pattern = /.at/i;
let matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches[0]); // cat
console.log(pattern.lastIndex); // 3
matches = pattern.exec(text);
console.log(matches.index); // 5
console.log(matches[0]); // bat
console.log(pattern.lastIndex); // 8
matches = pattern.exec(text);
console.log(matches.index); // 10
console.log(matches[0]); // sat
console.log(pattern.lastIndex); // 13