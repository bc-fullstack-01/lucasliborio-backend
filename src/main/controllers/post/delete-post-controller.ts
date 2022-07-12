import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError } from "../../protocols/http/http-response";

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