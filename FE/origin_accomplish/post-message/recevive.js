let mc = new MessageChannel();
// TODO: 存在问题
mc.addEventListener("message", (event) => {
  let origin = event.origin || event.originalEvent.origin;
  if (origin === "http://localhost:5758") {
    console.log("Received message");
  }
});
