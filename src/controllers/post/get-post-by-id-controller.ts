
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, notFound } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class GetPostById implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {

    const { postId } = request.params
    const postToSend = await postModel.findById(postId).populate({ path: 'comments', populate: { path: 'profileId' } }).populate('profileId')
    if (!postToSend) return notFound('POST')
    Object.assign(postToSend, { imageUrl: `${process.env.STORAGE_URL}${postToSend.imageUrl}` })
  }
}