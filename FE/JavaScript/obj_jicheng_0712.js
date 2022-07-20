// 原型式继承
function objetc(o) {
    function F(){}
    F.prototype = o ;
    return new F();
}

let person = {
    name: "lll",
    friends: ["hhh", "kkk", "bbb"]
}

let anthorPerson = objetc(person);
anthorPerson.name = "ggg";
anthorPerson.friends.push("aaa")

let yetanotherperson = objetc(person)
yetanotherperson.name=  "ppp"
yetanotherperson.friends.push("adada")
console.log("🚀 ~ file: obj_jicheng_0712.js ~ line 13 ~ person friends", person.friends)


let persones5 = Object.create(person,{
    name:{
        value:"es5"
    }
})
persones5.friends.push("push")
console.log("🚀 ~ file: obj_jicheng_0712.js ~ line 28 ~ persones5", persones5)
console.log("🚀 ~ file: obj_jicheng_0712.js ~ line 28 ~ persones5", persones5.friends)

debugger;
