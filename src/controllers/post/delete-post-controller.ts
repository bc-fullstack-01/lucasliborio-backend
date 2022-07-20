import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { serverError, ok, unauthorized, badRequest, notFound } from "../../protocols/http/http-response";
import profileModel from "../../db/mongo/models/profile-model";

export class DeletePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body
    const { postId } = request.params

    const postToDelete = await postModel.findOne({
      _id: postId
    })
    if (!postToDelete) return notFound('POST')

    if (postToDelete.profileId.toString() !== payload._id.toString()) return unauthorized()

    await postModel.deleteOne({_id: postId})
    await profileModel.updateOne({ _id: payload._id }, {
      $pull: {
        posts: postToDelete.id
      }
    })
    return ok(postToDelete)
    }
  }