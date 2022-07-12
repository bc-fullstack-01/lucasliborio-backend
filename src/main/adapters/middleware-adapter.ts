import { NextFunction, Request, Response } from "express"
import { Middleware } from "../protocols/api/middleware"
import { HttpRequest } from "../protocols/http/http-types"

export const middlewareAdapter = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }

    const resultMiddleware = await middleware.handle(httpRequest)

    if (resultMiddleware.code === 200) {
      Object.assign(req.body, {payload: resultMiddleware.body})
      next()
    } else {
      res.status(resultMiddleware.code).json(resultMiddleware.body)
    }
  }
}