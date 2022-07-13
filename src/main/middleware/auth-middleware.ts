import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  const somesecretdev = 'somesecretfordev'
  const payload = jwt.verify(authorization, somesecretdev)
  console.log(payload)
  if (payload) {
    Object.assign(req.body, {payload})
    next()
  } else {
    res.status(401).json({ error: 'unauthorized' })
  }
}