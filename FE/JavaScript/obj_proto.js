/*
 * @Author: Merlynr 
 * @Date: 2022-07-13 08:46:11 
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-13 09:41:51
 */
console.log("HHHHHH");
function SuperType(name) {
    this.property = true;
    this.colors = ["red", "blue", "green"];
    this.name_ = name
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
}
SuperType.prototype.sayName = function () {
    console.log(this.name_);
}

function SubType(name, age) {
    this.subproperty = false;
    // 继承SuperType，采用盗用构造函数的方法,可以解决实例对于共享参数的污染(call,apply)
    SuperType.call(this, name)
    this.age = age
}
// 继承
// SubType.prototype = new SuperType();\
/**
 * 寄生组合模式
 * @param  {} subType
 * @param  {} superType
 */
function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype)  // ? 复制原型对象
    prototype.constructor = subType  // ? sup的原型对象的构造函数指向 sub
    subType.prototype = prototype //? 形成原型链，sub.pro=sup.pro实现继承，sub.pro.const = sub
}
// 寄生式组合继承
inheritPrototype(SubType, SuperType);

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

SubType.prototype.getSuperValue = function () {
    return "覆写";
}
let instance = new SubType("instance_1", 0712)

// console.log("🚀 ~ file: obj_proto.js ~ line 20 ~ instance", instance.getSuperValue())

instance.colors.push("black")

console.log("🚀 ~ file: obj_proto.js ~ line 25 ~ instance.colors", instance.colors)
instance.sayName()
instance.sayAge()

let instance_ = new SubType("instrance_2", 0712)
console.log("🚀 ~ file: obj_proto.js ~ line 33 ~ instance_", instance_.colors)
instance_.sayName()
instance_.sayAge()
debugger;
