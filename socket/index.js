const httpServer = require("http").createServer();
const socketPort = 4000 || process.env.PORT;
const io = require("socket.io")(httpServer, {
  cors: {
    origin: 'http://localhost:3000' || process.env.ADDRESS,
  },
});

io.on("connection", (socket) => {
  console.log('A user connected');
  io.emit('Welcome', 'Socket server is working!')
});

httpServer.listen(socketPort);