import { Application } from "express";
import http from 'http'
import { Server } from "socket.io";
import { socketAuth } from "./socket-auth";

export default (app: Application) => {

  const server = http.createServer(app)
  const io = new Server(server, {
    cors: {
      origin: "*"
    }
  })

  const socketsOnline = io.of('/v1')

  socketsOnline.on('connecion', (socket: any) => {
    
  });

  return { server, socketsOnline }
}
