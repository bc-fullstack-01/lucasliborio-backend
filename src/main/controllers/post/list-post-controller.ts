
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocolos/api/controller";
import { HttpRequest, HttpResponse } from "../../protocolos/http/http";
import { serverError, ok } from "../../protocolos/http/http-response";

export class ListPostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const postsList = await postModel.find({})
      return ok(postsList)
    } catch (err: any) {
      return serverError()
    }
  }
}