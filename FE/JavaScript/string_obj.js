console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)) //16位码元转为字符
// console.log([..."ab☺de"]); // ["a", "b", "☺", "d", "e"]
// let stringValue = "hello world";
// console.log(stringValue.indexOf("o")); // 4
// console.log(stringValue.lastIndexOf("o")); // 7
// console.log(stringValue.indexOf("o", 6)); // 7
// console.log(stringValue.lastIndexOf("o", 6)); // 4
let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");
while(pos > -1) {
positions.push(pos);
pos = stringValue.indexOf("e", pos + 1);
}
console.log(positions); // [3,24,32,35,52]

let message = "foobarbaz";

console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false
console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false
console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false

// let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next()); // {value: "a", done: false}
console.log(stringIterator.next()); // {value: "b", done: false}
console.log(stringIterator.next()); // {value: "c", done: false}
console.log(stringIterator.next()); // {value: undefined, done: true}\

for (const c of "abcde") {
    console.log(c);
    }


// 特殊的序列，可以在替换文本中使用之前匹配的内容
let text = "cast, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
console.log(result); // word (cat), word (bat), word (sat), word (fat)


function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function(match, pos, originalText) {
    switch(match) {
    case "<":
    return "&lt;";
    case ">":
    return "&gt;";
    case "&":
    return "&amp;";
    case "\"":
    return "&quot;";
    }
    });
    }
let text_hE = "我是<就是\sjj&"
console.log(htmlEscape(text_hE)); 

//  localeCompare() ，这个方法比较两个字符串
function determineOrder(value) {
    let result = stringValue.localeCompare(value);
    if (result < 0) {
    console.log(`The string 'yellow' comes before the string '${value}'.`);
    } else if (result > 0) {
    console.log(`The string 'yellow' comes after the string '${value}'.`);
    } else {
    console.log(`The string 'yellow' is equal to the string '${value}'.`);
    }
    }
    determineOrder("brick");
    determineOrder("Yellow");
    determineOrder("zoo");

console.log(text_hE.big());

