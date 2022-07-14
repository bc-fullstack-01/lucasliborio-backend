import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization) res.json({error: 'unauthorized'})
  const somesecretdev = 'somesecretfordev'
  jwt.verify(authorization.split(' ')[1], somesecretdev, (err, payload) => {
    if (err) res.status(401).json({ error: 'unauthorized' })
    Object.assign(req.body, {payload})
    next()
  })
}