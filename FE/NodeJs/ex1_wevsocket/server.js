"use strict";
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

// 链接
wss.on("connection", (ws) => {
  console.log("哎呦，有人进来了！");

  ws.on("message", (data) => {
    ws.send(data + "来耍呀");
  });

  ws.on("close", () => {
    console.log("哎呦走了~");
  });
});
