import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError } from "../../protocols/http/http-response";

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