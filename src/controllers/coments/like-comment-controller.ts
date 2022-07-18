import { publishEvent } from "../../broker/pub";
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, serverError } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class LikeUnlikeCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { commentId } = request.params
    const { _id } = request.body.payload
    try {
      
      const commentToLike = await commentModel.findById(commentId)
      const likeIndex = commentToLike.likes.indexOf(_id)
      likeIndex === -1 
      ? await commentModel.findByIdAndUpdate(commentId, {
        $push:{likes: _id}
      }) : await commentModel.findByIdAndUpdate(commentId, {
        $pull:{likes: _id}
      })

      if (likeIndex === -1) {
        await publishEvent('comment-like', commentToLike.profileId, commentToLike )
        return ok({ sucess: 'comment liked successfully' })
      }
      else return ok({ sucess: 'comment unliked successfully' })

    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}