
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocolos/api/controller";
import { HttpRequest, HttpResponse } from "../../protocolos/http/http";
import { serverError } from "../../protocolos/http/http-response";

export class CreatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { title, description } = request.body
    try {
      await postModel.create({
        title,
        description
      })
    } catch (err: any) {
      return serverError()
    }
  }
}