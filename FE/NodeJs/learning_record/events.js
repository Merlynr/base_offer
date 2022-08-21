import EventEmitter from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on("start", (number) => {
  console.log(`开始 ${number}`);
});
// eventEmitter.removeAllListeners();
eventEmitter.emit("start", 23);
