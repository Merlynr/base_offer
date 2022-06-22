"use strict";
const app = require("express")();
const server = require("http").createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("来了来了~");
  io.on("disconnect", () => {
    console.log("哎呦走了~");
  });
});

server.listen("3000", () => {
  console.log("服务器starting~");
});


// 【WebSockets原理，握手和代码实现！用Socket.io制作实时聊天室-哔哩哔哩】 https://b23.tv/RRVsdKo
