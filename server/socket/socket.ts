const rootSocket = (io: any) => {
io.on("connection", (socket:any) => {
  console.log('A user connected');
  io.emit('Welcome', 'Socket server is working!')
});
};

export default rootSocket