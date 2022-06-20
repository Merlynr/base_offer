// "use strict";
// let a =6;
// let b =9;
// function simpleTag(strings,aVal,bVal,sumVal){
//     console.log(strings);
//     console.log(aVal);
//     console.log(bVal);
//     console.log(sumVal);

//     return 'hhh';
// }

// let untaRes = `${a}+${b}=${a+b}`
// let tag = simpleTag`${a}+${b}=${a+b}`

// console.log(untaRes);   

// let s1 = Symbol('foo'),
// s2=Symbol('bai'),
// s3=Symbol('as'),
// s4=Symbol('qw');

// let o = {
//     [s1]:'foo val'
// };
// o[s2]='bai val';
// Object.defineProperty(o,s2,{value: 'as val'})
// // Object.defineProperties(o,{[s2]:{value: 'as val'},[s3]:{value: 'qw value'}});

// console.log(o);

// class Foo{
//  async *[Symbol.asyncIterator](){}
// }

// let f = new Foo();

// console.log(f[Symbol.asyncIterator]());

// let o={foo:'bar'}
// with(o){
//     console.log(foo)
// }
// o[Symbol.unscopables]={
//     foo:true
// }
// with(o){
//     console.log(foo)
// }

// class Bar extends Array{}
// let bar=new Bar();
// bar=bar.concat('bar')
// console.log(bar)

console.log(1.1-1)