import { User } from '../models';

const rootSocket = (io: any) => {
const users:any = {};
io.on("connection", (socket:any) => {
  io.emit('Welcome', 'Socket server is working!')

  // Connection to socket
  socket.on('login', (data:any) => {
    console.log(data.userId + ' connected');
    users[socket.id] = data.userId;
  });

  // Disconnecting from socket
  socket.on('disconnect', async () => {
    const thisId = users[socket.id];
    console.log(users[socket.id] + ' disconnected');
    try {
      const user = await User.findOne({ _id: thisId });
      if (user?.status === 'online') {
        await User.findOneAndUpdate({ _id: thisId}, { status: 'realOffline' }, {new: true})
        console.log('Success')
      }
    } catch (err) {
      console.log(err)
    }
    delete users[socket.id];
  });
});
};

export default rootSocket