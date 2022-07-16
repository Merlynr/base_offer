const o = {};
// try {
//   Object.defineProperty(o, "foo", "bar");
//   console.log("success");
// } catch (e) {
//   console.log("failure");
// }

try {
  Object.defineProperty(o, "foo", { value: "bar" });
  console.log("success");
} catch (e) {
  console.log("failure");
}

const obj = {};
if (Reflect.defineProperty(obj, "foo", "bar")) {
  //   console.log(obj);
  console.log("success");
} else {
  console.log("fail");
}

if (Reflect.defineProperty(obj, "foo", { value: "bar" })) {
  console.log(obj);
  console.log("success");
} else {
  console.log("fail");
}
