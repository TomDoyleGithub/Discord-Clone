import { User } from '../models';

const rootSocket = (io: any) => {
let users:any = [];

const removeUser = (socketId:any) => {
  users = users.filter((user:any) => user.socketId !== socketId);
};

const getSocketUser = (internalSocket:any) => {
  return users.find((user:any) => user.socketId === internalSocket)
};

io.on("connection", (socket:any) => {
  io.emit('Welcome', 'Socket server is working!')

  // Connection to socket
  socket.on('login', (data:any) => {
    console.log(data.userId + ' connected');
    users.push({
      socketId: socket.id, 
      userId: data.userId,
      username: data.username
    })
    console.log(users)
  });

  socket.on("sendRequest", async ({ username }:any) => {
    const user  = await User.findOne({ username }).populate({
      path: 'friends',
      populate: {
          path: 'user',
          model: 'User'
        } 
  });
    const newUser = await users.find((user:any) => user?.username === username);
    const userSend = await newUser?.socketId;
    if (userSend) {
      try {
        io.to(userSend).emit("getRequest", {
          friends: user.friends
        });
        console.log('User is online and the request was sent.')
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('The user is not online the request was not sent.')
    }
  });

  // Disconnecting from socket
  socket.on('disconnect', async () => {
    const thisId = getSocketUser(socket.id)?.userId;
    if (thisId) {
          console.log(thisId + ' disconnected');
    try {
      const user = await User.findOne({ _id: thisId });
      if (user?.status === 'online') {
        await User.findOneAndUpdate({ _id: thisId}, { status: 'realOffline' }, {new: true})
      }
    } catch (err) {
      console.log(err)
    }
    removeUser(socket.id);
    }
  });
});
};

export default rootSocket