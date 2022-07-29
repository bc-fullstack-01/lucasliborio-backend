
import { publishEvent } from "../../broker/pub";
import commentModel from "../../db/mongo/models/comment-model";
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, notFound } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class CreateCommentController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload, content } = request.body
    const { postId } = request.params

    const postToAddNewComment = await postModel.findById(postId)
    if (!postToAddNewComment) return notFound('POT')
    const createComment = await commentModel.create({
      content,
      profileId: payload._id,
      postId
    })
    await postModel.updateOne({ _id: postId }, {
      $push: {
        comments: createComment.id
      }
    })
    const commentToReturn = await commentModel.findById(createComment.id).populate({path: 'profileId'})
    await publishEvent('new-comment', postToAddNewComment.profileId, createComment)
    return ok(commentToReturn)
  }
}

