import { verify } from "jsonwebtoken"
import { Socket } from "socket.io"
import profileModel from "../../db/mongo/models/profile-model"

const somesecretdev = process.env.JWT_SECRET || 'somesecretfordev'
export const socketAuth = (socket: Socket, next) => {
  if (socket.handshake.auth?.token) {
    verify(socket.handshake.auth.token, somesecretdev, async (err, payload) => {
      if (err) return next(new Error('Authentication Error'))
      const profile = await profileModel.findById(payload.profileId)
      if (profile) {
        Object.assign(socket, { profile })
        next()
      } else {
        next(new Error('Authentication Error'))
      }
    })
  }
}