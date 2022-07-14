import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError, ok, unauthorized } from "../../protocols/http/http-response";

export class DeletePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { postId, payload } = request.body

    try {
      const postToDelete = await postModel.findById({
        _id: postId
      })

      if (postToDelete.profileId === payload.profileId) return ok(postModel.findByIdAndDelete(postId))
      else {
        return unauthorized()
      }

    } catch (err: any) {
      return serverError()
    }
  }
}