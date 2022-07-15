import { Response, Request } from "express";
import { Controller } from "../protocols/api/controller";
import { HttpRequest } from "../protocols/http/http-types";

export const expressAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params
    }
    console.log(req.body)
    const { code, body } = await controller.handle(httpRequest)
    return res.status(code).json(body)
  }
}