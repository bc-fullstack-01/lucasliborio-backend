
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { serverError, ok, badRequest } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class CreateCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload ,content } = request.body
    const { postId } = request.params
    try {
      const postToAddNewComment = await postModel.findById(postId)

      if (postToAddNewComment) {
        const createComment = await commentModel.create({
          content,
          profileId: payload.profileId,
          postId
        })
        const postToUpdateComment = await postModel.updateOne({_id: postId},{$push: {
          comments: createComment.id
        }})
        if (postToUpdateComment) return ok({sucess: 'comment added succesfully'})
      }
      
    } catch (error) {
      if (error.name == "ValidationError") return badRequest('please try again')
      return serverError()
    }
  }
}