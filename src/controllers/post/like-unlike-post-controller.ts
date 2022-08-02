import { publishEvent } from "../../broker/pub";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { notFound, ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class LikeUnlikePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { postId } = request.params
    const { _id } = request.body.payload

    const postToLikeUnlike = await postModel.findById(postId)
    if (!postToLikeUnlike) return notFound('POST')

    const indexToPost = postToLikeUnlike.likes.indexOf(_id)
    indexToPost === -1
      ? await postModel.findByIdAndUpdate(postId, {
        $push: { likes: _id }
      }) : await postModel.findByIdAndUpdate(postId, {
        $pull: { likes: _id }
      })

    if (indexToPost === -1) {
      await publishEvent('post-like', [postToLikeUnlike.profileId], postToLikeUnlike)
      return ok({ sucess: 'post liked successfully' })
    }
    else {
      await publishEvent('post-unlike', [postToLikeUnlike.profileId], postToLikeUnlike)
      return ok({ sucess: 'post unliked successfully' })
    }
  }
}