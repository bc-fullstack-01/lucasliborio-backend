
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, notFound, forbbiden } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class DeleteCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { commentId, postId } = request.params
    const { payload } = request.body

    const postToDeleteComment = await postModel.findById(postId)
    if (postToDeleteComment.profileId.toString() !== payload._id.toString()) return forbbiden()
    if (!postToDeleteComment) return notFound('POST')

    const commentToDelete = await commentModel.findByIdAndDelete(commentId)
    if (!commentToDelete) return notFound('COMMENT')
    await postModel.findByIdAndUpdate(postId, {
      $pull: {
        comments: commentToDelete.id
      }
    })
    return ok({ ok: 'comment deleted successfully' })
  }
}