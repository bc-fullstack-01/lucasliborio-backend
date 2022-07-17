
import commentModel from "../../db/mongo/models/comment-model";
import { Controller } from "../../protocols/api/controller";
import { serverError, ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class UpdateCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { content } = request.body
    const { commentId } = request.params
    try {
      const editedComment = await commentModel.findOneAndUpdate({ _id: commentId }, {
        content,
      }, { runValidators: true, new: true })
      return ok({ sucess: editedComment.id })
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}