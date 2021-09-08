import { io } from "socket.io-client";

const socket = io('ws://localhost:4000');

export default socket;