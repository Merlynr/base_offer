/*
 * @Author: Merlynr 
 * @Date: 2022-07-13 09:47:04 
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-13 10:45:21
 */

// * 类声明
// class Person { }
// * 类表达式
// const Anima = class { };

// ! 函数表达式无法被提升
console.log(FunctionExpression);
var FunctionExpression = function () { }
console.log(FunctionExpression);

// !函数声明则可以
console.log(FunctionDeclaration);
function FunctionDeclaration() { }
console.log(FunctionDeclaration);

// ! 类表达式无法被提升
console.log(ClassExpression);
var ClassExpression = class { }
console.log("🚀 ~ file: class_0713.js ~ line 26 ~ ClassExpression", ClassExpression)


// !函数声明则可以
// console.log(ClassDeclaration);
class ClassDeclaration { }
console.log("🚀 ~ file: class_0713.js ~ line 31 ~ ClassDeclaration", ClassDeclaration)


// ! 作用域

{
    function FunctionDeclaration() { }
    class ClassDeclaration { }
}
console.log(FunctionDeclaration); // FunctionDeclaration() {}
console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined


let Person = class PersonName{
    identify(){
        console.log(Person.name,PersonName.name);
    }
}

let p =new Person()

p.identify()

console.log(Person.name);
// console.log(PersonName);

class Animal{
    constructor(name){
        console.log("ANIMAL",(name|| "don't have a name!").toUpperCase());
    }
}
let lv = new Animal
let dog =  new Animal("dog")


let poo = new class Poo{
    constructor(x){
        console.log(x);
    }
}("立即实例化");

