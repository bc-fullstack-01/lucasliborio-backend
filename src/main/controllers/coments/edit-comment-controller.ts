
import commentModel from "../../db/mongo/models/comment-model";
import { Controller } from "../../protocols/api/controller";
import { serverError, ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class EditCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { content, commentId } = request.body
    try {
      const editedComment = await commentModel.findOneAndUpdate({ _id: commentId }, {
        content
      })
      return ok(editedComment)
    } catch (error) {
      return serverError()
    }
  }
}