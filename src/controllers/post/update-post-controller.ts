import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError, ok, badRequest } from "../../protocols/http/http-response";

export class UpdatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { title, description } = request.body
    const { postId } = request.params
    try {

      const postUpdated = await postModel.findOneAndUpdate({_id: postId},{
        title: title,
        description: description

      }, {runValidators: true, new:true})
      console.log(postUpdated)
      if (postUpdated) return ok(postUpdated)

      return badRequest('invalid postId')
    } catch (err: any) {
      if (err.name === "ValidationError") return badRequest('invalid body request')
      return serverError()
    }
  }
}