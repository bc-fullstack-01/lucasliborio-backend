
import commentModel from "../../db/mongo/models/comment-model";
import { Controller } from "../../protocols/api/controller";
import { serverError, ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class CreateCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { userId, postId, content } = request.body
    try {
      const createComment = await commentModel.create({
        content,
        userId,
        postId
      })
      return ok(createComment)
    } catch (error) {
      return serverError()
    }
  }
}