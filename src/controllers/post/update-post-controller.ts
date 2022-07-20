import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok, notFound } from "../../protocols/http/http-response";

export class UpdatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { title, description } = request.body
    const { postId } = request.params

    const postUpdated = await postModel.findOneAndUpdate({ _id: postId }, {
      title: title,
      description: description

    }, { runValidators: true, new: true })

    if (!postUpdated) return notFound('POST')
    return ok(postUpdated)
  }
}