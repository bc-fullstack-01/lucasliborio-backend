import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError, ok, unauthorized, badRequest } from "../../protocols/http/http-response";

export class DeletePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body
    const { postId } = request.params
    try {
      const postToDelete = await postModel.findById(postId)

      if(!postToDelete) return badRequest('not found')
      
      if (postToDelete.profileId.toString() === payload.profileId) return ok(await postModel.findByIdAndDelete(postId))
      else {
        return unauthorized()
      }
    } catch (err: any) {
      if (err.name == "TypeError") return badRequest('invalid parameters')
      return serverError()
    }
  }
}