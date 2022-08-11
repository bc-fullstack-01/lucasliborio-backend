import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok } from "../../protocols/http/http-response";
import "dotenv/config"

export class FeedController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body
    const { page } = request.query
    const feedToShow = await postModel.find({ profileId: { $in: payload.following } })
      .populate("profileId")
      .limit(10)
      .skip((page || 0) * 10)
      .sort({ createdAt: "desc" })
    
    feedToShow.map(p => {
      Object.assign(p, {imageUrl:`${process.env.STORAGE_URL}${p.imageUrl}`})
    })
    return ok(feedToShow)
  }
}