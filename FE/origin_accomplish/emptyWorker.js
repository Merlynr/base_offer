self.addEventListener("message", ({ data }) => console.log(data));
self.onmessage = ({ data }) => console.log(data);
self.postMessage("foo");
self.close();
self.postMessage("bar");
setTimeout(() => self.postMessage("baz"), 0);
throw Error("我是傻逼");
