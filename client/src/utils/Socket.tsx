import { io } from "socket.io-client";

const socket = io();

console.log("Start socket");
socket.on('Welcome', message => {
    console.log(message)
});

export default socket;