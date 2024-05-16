import { Server } from 'socket.io';
import http from 'http';
const webSocketConnections = (server: http.Server) => {
  const io = new Server(server, { cors: { origin: true } });
  console.log('WEB SOCKET CONNECTION IS ON PORT: 4200');

  io.on('connection', (socket) => {
    socket.on('message', (message) => {
      console.log(message);
    });
  });
};

export { webSocketConnections };
