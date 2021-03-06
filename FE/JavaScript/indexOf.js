let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4)); // 3true
console.log(numbers.lastIndexOf(4)); // 5
console.log(numbers.includes(4)); // true
console.log(numbers.indexOf(4, 4)); // 5
console.log(numbers.lastIndexOf(4, 4)); // 3
console.log(numbers.includes(4, 7)); // false
let person = { name: "Nicholas" };
let people = [{ name: "Nicholas" }];
let morePeople = [person];
console.log(people.indexOf(person)); // -1
console.log(morePeople.indexOf(person)); // 0
console.log(people.includes(person)); // false
console.log(morePeople.includes(person)); // true

const evens = [2, 4, 6];

evens.find((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    return element === 9;
    });


