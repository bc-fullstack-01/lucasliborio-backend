import { Response, Request } from "express";
import { Controller } from "../protocols/api/controller";
import { serverError } from "../protocols/http/http-response";
import { HttpRequest } from "../protocols/http/http-types";

export const expressAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      file: req.file
    }
    try {
      const { code, body } = await controller.handle(httpRequest)
      return res.status(code).json(body)
    } catch (error) {
      if (error.name === "ValidationError") return res.status(400).json({ error: error.message })
      if (error.name === "CastError") return res.status(404).json({error: 'NOTFOUND'})
      else return serverError()
    }
  }
}