import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok } from "../../protocols/http/http-response";

export class ListPostsController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { payload } = request.body

    const postsList = await postModel.find({
      profileId: payload._id
    })
    return ok(postsList)
  }
}