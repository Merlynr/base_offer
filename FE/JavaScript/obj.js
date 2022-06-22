function displayInfo(args) {
  let output = "";
  if (typeof args.name == "string") {
    output += "Name: " + args.name + "\n";
  }
  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }
  console.log(output);
}
displayInfo({
  name: "Nicholas",
  age: 29,
});
displayInfo({
  name: "Greg",
});

const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, (x) => x ** 2);
const a3 = Array.from(
  a1,
  function (x) {
    return x ** this.exponent;
  },
  { exponent: 2 }
);
console.log(a2); // [1, 4, 9, 16]
console.log(a3); // [1, 4, 9, 16]
