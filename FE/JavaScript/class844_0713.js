/*
 * @Author: Merlynr 
 * @Date: 2022-07-13 16:18:18 
 * @Last Modified by: Merlynr
 * @Last Modified time: 2022-07-13 17:30:30
 */
// * 继承类
class Vehicle {
    constructor() {
        this.hasEngine = true
    }
    identifyPrototype(id) {
        console.log("🚀 ~ file: class844_0713.js ~ line 10 ~ Vehicle ~ identifyPrototype ~ id", id)
    }
    static identifyPrototype(id) {
        console.log("🚀 ~ file: class844_0713.js ~ line 13 ~ Vehicle ~ identifyPrototype ~ id", id)
    }
}
// * BUS为派生类
class Bus extends Vehicle {
    constructor() {
        super();
        console.log(this instanceof Vehicle);
        console.log(this);
    }
    static identify(id) {
        super.identifyPrototype(id)
    }
}

let v = new Vehicle()
// let b = new Bus()
// console.log(b instanceof Bus);
// console.log(b instanceof Vehicle);
// b.identifyPrototype('bus')
// v.identifyPrototype('vehicle')

// Bus.identifyPrototype('bus')
// Bus.identify('super bus')
// Vehicle.identifyPrototype('vehicle')

// * 继承普通构造函数
function Person() {
}

class Engineer extends Person { }

let e = new Engineer
// console.log(e instanceof Person);
// console.log(e instanceof Engineer);

// * 通过在实例化时检测 new.target 是不是抽象基类，可以阻止对抽象基类的实例化
class BaseClass {
    constructor() {
        console.log(new.target);
        if (new.target == BaseClass) {
            throw new Error('BaseClass can not be directly instantiated');
        }
        if (!this.foo) {
            throw new Error('Inheriting class must define foo()')
        }
        console.log("success");
    }
}

// 派生类
class DerivedClass extends BaseClass { }

class DerivedClass_1 extends BaseClass {
    constructor() {
        super();
    }
    foo() {
        console.log("🚀 ~ file: class844_0713.js ~ line 74 ~ DerivedClass_1 ~ foo ~ foo", foo)
    }
}
// new DerivedClass_1()
// new DerivedClass()
// console.log(Derived.name);
// new BaseClass()
// console.log(BaseClass.name);


// ! 继承内置引用类型

class SuperArray extends Array{
    shuffle(){
        for(let i = this.length-1 ;i>0;i--){
            const j  = Math.floor(Math.random()*(i+1));
            this[i] = this[i]^this[j]
        }
    }
}