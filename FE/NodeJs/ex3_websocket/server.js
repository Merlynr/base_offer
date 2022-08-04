var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  socket.on("message", function (msg) {
    console.log(msg);
    socket.send("Nice to meet you!");
  });
});
