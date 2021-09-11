const rootSocket = (io: any) => {
const users:any = {};
io.on("connection", (socket:any) => {
  console.log('A user connected');
  io.emit('Welcome', 'Socket server is working!')

  // Connection to socket
  socket.on('login', (data:any) => {
    console.log(data.userId + ' connected');
    users[socket.id] = data.userId;
  });

  // Disconnecting from socket
  socket.on('disconnect', () => {
    console.log(users[socket.id] + ' disconnected');
    delete users[socket.id];
  });
});
};

export default rootSocket