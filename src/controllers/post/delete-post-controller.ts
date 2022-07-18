import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError, ok, unauthorized, badRequest } from "../../protocols/http/http-response";
import profileModel from "../../db/mongo/models/profile-model";

export class DeletePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body
    const { postId } = request.params
    try {
      const postToDelete = await postModel.findById(postId)

      if(!postToDelete) return badRequest('post not found')
      
      if (postToDelete.profileId.toString() === payload._id) {
        const postToDelete = await postModel.findByIdAndDelete(postId)
        await profileModel.updateOne({_id: payload._id}, {$pull: {
          posts: postToDelete.id
        }})
        return ok(postToDelete)
      }
      else {
        return unauthorized()
      }
    } catch (err: any) {
      if (err.name == "TypeError") return badRequest('invalid parameters')
      return serverError()
    }
  }
}