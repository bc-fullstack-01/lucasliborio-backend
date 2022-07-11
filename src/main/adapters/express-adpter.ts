import { Response, Request } from "express";
import { Controller } from "../protocols/api/controller";
import { HttpRequest } from "../protocols/http/http-types";

export const expressAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const resultController = await controller.handle(httpRequest)
    return res.status(resultController.code).json({ data: resultController.body })
  }
}