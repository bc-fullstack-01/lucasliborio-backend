import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError, ok } from "../../protocols/http/http-response";

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