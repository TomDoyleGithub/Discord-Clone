import { io } from "socket.io-client";

const socket = io('https://discord-punkinut.herokuapp.com');

export default socket;