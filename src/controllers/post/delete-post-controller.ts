import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok, notFound, forbbiden } from "../../protocols/http/http-response";
import profileModel from "../../db/mongo/models/profile-model";

export class DeletePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body
    const { postId } = request.params

    const postToDelete = await postModel.findById(postId)
    if (!postToDelete) return notFound('POST')

    if (postToDelete.profileId.toString() !== payload._id.toString()) return forbbiden()
    await postModel.deleteOne({ _id: postId })
    await profileModel.updateOne({ _id: payload._id }, {
      $pull: {
        posts: postToDelete.id
      }
    })
    return ok(postToDelete)
  }
}