import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok, serverError } from "../../protocols/http/http-response";

export class FeedController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body
    const { page } = request.query
    console.log(payload.following)
    try {
      const feedToShow = await postModel.find({ profileId: { $in: payload.following } })
        .populate("profileId")
        .limit(10)
        .skip((page || 0) * 10)
        .sort({ createdAt: "desc" })
      
      return ok(feedToShow)
    } catch (error) {
  
      return serverError()
    }
  }
}