/*
 * @Author: Merlynr 
 * @Date: 2022-07-13 16:18:12 
 * @Last Modified by:   Merlynr 
 * @Last Modified time: 2022-07-13 16:18:12 
 */
class Person {
    constructor(name) {
        // * 添加到this，会共享实例
        this.locate = () => console.log('instance', this);
        this.name_ = name || 'No Man!'
        this.nicknames = ['Jack', 'Jake', 'J-Dog'];
    }
    // * 定义到类的原型对象上
    locate() {
        console.log('prototype', this);
    }

    sayName() {
        console.log(this.name_);
    }

    sayHello() {
        console.log(`${Person.pre} ${this.otherName}`);
    }

    // 定义到类本身上
    // static create(name_) {
    //     // console.log('class', this);
    //     return new Person(name_)
    // }

    // * 原型上的生成器
    *createNicknameIterator() {
        yield 'Shany';
        yield 'Jeffery';
        yield 'Thea'
    }

    // * 定义到类上的生成器
    static * createJobIterator() {
        yield 'Abernathy, Stoltenberg and Simonis';
        yield 'Stamm, Mills and Harber';
        yield 'Huels, Parisian and Hills'
    }

    // 返回迭代器
    // [Symbol.iterator](){
    //     return this.nicknames.entries()
    // }
    // 可迭代对象
    *[Symbol.iterator]() {
        yield *this.nicknames.entries()
    }
}

// let p = new Person();

// p.locate()
// Person.prototype.locate()
// Person.locate()
Person.pre = 'Hello,'
// p = Person.create('Brianne')
Person.prototype.otherName = "Ms. Cary Lueilwitz"
let p = new Person()
console.log("🚀 ~ file: class843_0713.js ~ line 55 ~ p", p)
p.sayHello()
debugger;

let jobIter = Person.createJobIterator()
console.log(jobIter.next().value);
console.log(jobIter.next().value);
console.log(jobIter.next().value);
console.log(jobIter.next().value);

let p_nickName = p.createNicknameIterator()
console.log(p_nickName.next().value);
console.log(p_nickName.next().value);
console.log(p_nickName.next().value);

for (let [idx, nickname] of p) {
    console.log(nickname)
}

