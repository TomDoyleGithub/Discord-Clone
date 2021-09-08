import { io } from "socket.io-client";

const socket = io('ws://localhost:4000' || 'https://discord-punkinut.herokuapp.com');

export default socket;