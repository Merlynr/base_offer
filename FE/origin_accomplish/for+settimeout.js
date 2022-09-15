const log = console.log.bind(console);
// for (let i = 0; i < 10; i++) {
//   setTimeout((_) => {
//     log(i);
//   }, 1000);
// }

function foo() {
  console.count("执行foo");
  setTimeout(foo, 1000);
}
foo();
