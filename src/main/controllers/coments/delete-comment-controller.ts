
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { serverError, ok, badRequest } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class DeleteCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {

    const { commentId, postId } = request.params
    try {
      const postToDeleteComment = await postModel.findById(postId)

      if (postToDeleteComment) {
        const commentToDelete = await commentModel.findByIdAndDelete(commentId)
        await postModel.findByIdAndUpdate(postId, {
          $pull: {
            comments: commentToDelete.id
          }
        })
      }
      return ok({ sucess: 'comment deleted successfully' })
    } catch (error) {
      console.log(error)
      if (error.name == "ValidationError") return badRequest('invalid params')
      return serverError()
    }
  }
}