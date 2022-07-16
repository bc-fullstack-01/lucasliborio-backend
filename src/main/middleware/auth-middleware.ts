import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  if (!authorization) return res.json({ error: 'unauthorized' })
  const somesecretdev = 'somesecretfordev'
  jwt.verify(authorization.split(' ')[1], somesecretdev, (err, payload) => {
    if (err) return res.status(401).json({ error: 'unauthorized' })
    Object.assign(req.body, { payload })
    return next()
  })
}