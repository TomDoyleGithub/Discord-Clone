const mongojs = require('mongojs');

const newDb = mongojs('discorddb', ['users']);

const rootSocket = (io: any, app:any) => {
const users:any = {};
io.on("connection", (socket:any) => {
  io.emit('Welcome', 'Socket server is working!')

  // Connection to socket
  socket.on('login', (data:any) => {
    console.log(data.userId + ' connected');
    users[socket.id] = data.userId;
  });

  // Disconnecting from socket
  socket.on('disconnect', () => {
    const thisId = users[socket.id];
    console.log(users[socket.id] + ' disconnected');
    newDb.users.update({_id: mongojs.ObjectId(thisId)}, {$set: { status: 'offline'}})
    delete users[socket.id];
  });
});
};

export default rootSocket