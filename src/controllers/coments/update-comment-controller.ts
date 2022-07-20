
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, notFound } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class UpdateCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { content } = request.body
    const { commentId, postId } = request.params

    const postToAddNewComment = await postModel.findById(postId)
    if (!postToAddNewComment) return notFound('POST')
    const editedComment = await commentModel.findOneAndUpdate({ _id: commentId }, {
      content,
    }, { runValidators: true, new: true })
    if (!editedComment) return notFound('COMMENT')
    return ok({ sucess: editedComment.id })

  }
}