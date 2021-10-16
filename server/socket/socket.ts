import { User } from '../models';

const rootSocket = (io: any) => {
// Pool of online users
let users:any = [];

// Removes duplicate users
const removeUser = async (userId:any) => {
  users = await users.filter((user:any) => user.userId !== userId);
};

// Removes any real offline users
const removeOffline = async () => {
  users = await users.filter((user:any) => user.status !== 'realOffline');
};

const getSocketUser = (internalSocket:any) => {
  return users.find((user:any) => user.socketId === internalSocket)
};

io.on("connection", (socket:any) => {

  // Connection to socket
  socket.on('login', async (data:any) => {
    console.log(data.userId + ' connected');
    await removeUser(data.userId);
    await removeOffline();
    await users.push({
      socketId: socket.id, 
      userId: data.userId,
      username: data.username,
      status: data.status,
      customStatus: data.customStatus
    });
    await io.emit('getUsers', users);
  });

  socket.on("sendRequest", async ({ username }:any) => {
    const user  = await User.findOne({ username })
    const thisId = await getSocketUser(socket.id)?.userId;
    // Change below to search through socket users so the socket is updated
    const newUser = await users.find((user:any) => user?.username === username);
    const userSend = await newUser?.socketId;
    const userStatus = await newUser?.status;

    if (userStatus === 'realOffline' && userStatus === 'realIdle' && userStatus === 'realDisturb') {
      try {
        io.to(userSend).emit("getRequest", {
          id: thisId
        });
        console.log('User is online and the request was sent.')
      } catch (err) {
        console.log(err)
      }
    } else {
       await User.findOneAndUpdate({ _id: user._id }, { $addToSet: {friends: { user: thisId, status: 2 }} }, {new: true});
      // //  Adds notifcation
       await User.findOneAndUpdate({ _id: user._id }, { $inc: {friendNotifactions: 1}}, {new: true});
       console.log('The user is not online the request was not sent.')
    }
  });

  socket.on('sendAccept', async ({ id }:any) => {
    const user  = await User.findOne({ _id: id })
    const newUser = await users.find((user:any) => user?.userId === id);
    const thisId = await getSocketUser(socket.id)?.userId;
    const userSend = await newUser?.socketId;
    if (userSend) {
      try {
        io.to(userSend).emit('getAccept', {
          id: thisId
        });
      } catch (err) {
        console.log(err)
      }
    } else {
      await User.findOneAndUpdate({ _id: user._id, friends: {$elemMatch: {user: thisId}}}, {$set: {'friends.$.status': 3}},{new: true});
    }
  })

  socket.on('ignoreRequest', async ({ id }:any) => {
    const user  = await User.findOne({ _id: id })
    const newUser = await users.find((user:any) => user?.userId === id);
    const thisId = await getSocketUser(socket.id)?.userId;
    const userSend = await newUser?.socketId;
    if (userSend) {
      try {
        io.to(userSend).emit('getIgnore', {
          id: thisId
        });
      } catch (err) {
        console.log(err)
      }
    } else {
      await User.findOneAndUpdate({ _id: user._id }, { $pull: {friends: { user: thisId }} }, {new: true})
    }
  })

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
    // Here change the status if idle and do-not-disturb
    if (getSocketUser(socket.id).status === 'online') {
      getSocketUser(socket.id).status = 'realOffline'
    } else if (getSocketUser(socket.id).status === 'idle') {
      getSocketUser(socket.id).status = 'realIdle'
    } else if (getSocketUser(socket.id).status === 'do-not-disturb') {
      getSocketUser(socket.id).status = 'realDisturb'
    }
    io.emit('getUsers', users);
    }
  });
});
};

export default rootSocket