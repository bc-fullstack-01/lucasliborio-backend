import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import profileModel from "../db/mongo/models/profile-model"

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization) return res.status(403).json({ error: 'forbbiden' })
  const somesecretdev = 'somesecretfordev'
  jwt.verify(authorization.split(' ')[1], somesecretdev, async (err, payload) => {
    if (err) return res.status(401).json({ error: 'unauthorized' })
    const tokenPayload = payload as any
    await profileModel.findById(tokenPayload.profileId).then(profileData => {
      console.log(profileData)
      Object.assign(req.body, { payload: profileData })
      return next()
    })
  })
}