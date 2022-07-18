import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok, serverError } from "../../protocols/http/http-response";
import profileModel from "../../db/mongo/models/profile-model";
import { rabbitBroke } from "../../server";
import { publishEvent } from "../../broker/pub";

export class CreatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { title, description, payload } = request.body
    try {
      const postToCreate = await postModel.create({
        title,
        description,
        profileId: payload._id
      })
      
      if (postToCreate) {
        const profile = await profileModel.findOneAndUpdate({ _id: payload._id }, {
          $push: {
            posts: postToCreate.id
          }
        })
        await publishEvent('post', profile.followers , postToCreate)
        return ok(postToCreate)
      }
    } catch (err: any) {
      console.log(err)
      return serverError()
    }
  }
}