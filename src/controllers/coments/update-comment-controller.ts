
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, notFound } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class UpdateCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { content, payload} = request.body
    const { commentId, postId } = request.params

    const postToUpdateComment = await postModel.findById(postId)
    if (!postToUpdateComment) return notFound('POST')
    const commentToEdit = await commentModel.findById(commentId)
    if (!commentToEdit) return notFound('COMMENT')
    if (commentToEdit.profileId === payload._id){
      const editedComment = await commentModel.findOneAndUpdate({ _id: commentId }, {
        content,
      }, { runValidators: true, new: true })
    }
    return ok({ ok: 'comment edited successfully'})
  }
}