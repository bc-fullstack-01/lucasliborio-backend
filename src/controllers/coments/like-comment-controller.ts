import { publishEvent } from "../../broker/pub";
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { notFound, ok, serverError } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class LikeUnlikeCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { commentId } = request.params
    const { payload } = request.body

    const commentToLike = await commentModel.findById(commentId)
    if (commentToLike) return notFound("COMMENT")
    
    const likeIndex = commentToLike.likes.indexOf(payload._id)
    likeIndex === -1
      ? await commentModel.findByIdAndUpdate(commentId, {
        $push: { likes: payload._id }
      }) : await commentModel.findByIdAndUpdate(commentId, {
        $pull: { likes: payload._id }
      })

    if (likeIndex === -1) {
      await publishEvent('comment-like', commentToLike.profileId, commentToLike)
      return ok({ ok: 'comment liked successfully' })
    }
    return ok({ ok: 'comment unliked successfully' })
  }
}