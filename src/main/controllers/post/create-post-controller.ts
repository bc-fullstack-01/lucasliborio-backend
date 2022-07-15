import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok, serverError } from "../../protocols/http/http-response";

export class CreatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { title, description, payload } = request.body
    try {
      const postToCreate = await postModel.create({
        title,
        description,
        profileId: payload.profileId
      })
      console.log(postToCreate)
      return ok(postToCreate)
    } catch (err: any) {
      console.log(err)
      return serverError()
    }
  }
}