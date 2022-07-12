const Person = (() => {
  function Person() {
    this.name = "single";
  }
  Person.prototype.sayHi = () => {
    console.log("Hi,Sigle");
  };

  let instance = null;
  return function singleTon() {
    if (!instance) {
      instance = new Person();
    }
    return instance;
  };
})

const p1 = Person();
const p2 = Person();
console.log(p1,p2);

console.log(p1==p2);
