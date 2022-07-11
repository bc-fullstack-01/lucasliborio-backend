
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocolos/api/controller";
import { HttpRequest, HttpResponse } from "../../protocolos/http/http-types";
import { serverError } from "../../protocolos/http/http-response";

export class DeletePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { postId } = request.body
    try {
      await postModel.deleteOne({
        _id: postId
      })
    } catch (err: any) {
      return serverError()
    }
  }
}