const { Server } = require("socket.io");

let io;

const initializeSocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnected`);
    });
  });
};

const getIO = () => {
  return io;
};

module.exports = { getIO, initializeSocket };
