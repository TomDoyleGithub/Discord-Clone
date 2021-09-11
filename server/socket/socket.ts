const rootSocket = (io: any) => {
const users:any = {};
io.on("connection", (socket:any) => {
  io.emit('Welcome', 'Socket server is working!')

  // Connection to socket
  socket.on('login', (data:any) => {
    console.log(data.userId + ' connected');
    users[socket.id] = data.userId;
    io.emit('SendOnline', users[socket.id]);
  });

  // Disconnecting from socket
  socket.on('disconnect', () => {
    console.log(users[socket.id] + ' disconnected');
    io.emit('SendOffline', users[socket.id]);
    delete users[socket.id];
  });
});
};

export default rootSocket