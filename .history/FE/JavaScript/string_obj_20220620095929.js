console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)) //16位码元转为字符
console.log([..."ab☺de"]); // ["a", "b", "☺", "d", "e"]
let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4