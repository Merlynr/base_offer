'use strict';
let date  = new Date(Date.parse("May 23, 2019"));
let date1 = new Date(Date.UTC(2000, 0));
console.log(date);
console.log(date1);
const leak_m = require('./memory_leak')
let start = Date.now();
leak_m.leak();
leak_m.outer();
let end = Date.now();
console.log(end-start);


// format

console.log(date1.toDateString());
console.log(date.toLocaleTimeString(),date.toLocaleDateString());
console.log(date.toUTCString());