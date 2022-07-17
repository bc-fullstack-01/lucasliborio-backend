import { Application } from "express";
import http from 'http'
import { Server } from "socket.io";
export default (app: Application) => {
  
  const server = http.createServer(app)
  const io = new Server(server, {
    cors:{
      origin:"*"
    }
  })
  const socketsOnline = io.of('/v1')

  socketsOnline.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });
  
}