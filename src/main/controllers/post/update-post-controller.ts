
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocolos/api/controller";
import { HttpRequest, HttpResponse } from "../../protocolos/http/http-types";
import { serverError } from "../../protocolos/http/http-response";

export class updatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { postId, title, description } = request.body
    try {
      await postModel.findOneAndUpdate({ _id: postId },{
        title,
        description
      })
    } catch (err: any) {
      return serverError()
    }
  }
}