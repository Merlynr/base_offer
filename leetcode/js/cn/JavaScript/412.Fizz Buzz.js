// @algorithm @lc id=412 lang=javascript
// @title fizz-buzz

// @author Merlynr
// @test(3)=["1","2","Fizz"]
// @test(5)=["1","2","Fizz","4","Buzz"]
// @test(15)=["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let map = ["Fizz", "Buzz", "FizzBuzz"],
    res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push(map[2]);
    } else if (i % 5 === 0) {
      res.push(map[1]);
    } else if (i % 3 === 0) {
      res.push(map[0]);
    } else {
      res.push(JSON.stringify(i));
    }
  }
  return res;
};
