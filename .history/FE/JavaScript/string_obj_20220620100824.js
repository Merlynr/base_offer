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