import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok, serverError } from "../../protocols/http/http-response";
import profileModel from "../../db/mongo/models/profile-model";
import { publishEvent } from "../../broker/pub";
import { uploadFileOnBucket } from "../../upload/upload-minio";

export class CreatePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { file } = request
    const { title, description, payload } = request.body
    try {
      let postToCreate;
      if (file) {
        const imageUrl = await uploadFileOnBucket(file, payload._id)
        postToCreate = await postModel.create({
          title,
          description,
          profileId: payload._id,
          hasImage: true,
          imageUrl
        })
      } else {
        postToCreate = await postModel.create({
          title,
          description,
          profileId: payload._id
        })
      }
      if (postToCreate) {
        const profile = await profileModel.findOneAndUpdate({ _id: payload._id }, {
          $push: {
            posts: postToCreate.id
          }
        })
        await publishEvent('post', profile.followers, postToCreate)
        return ok(postToCreate)
      }
    } catch (err: any) {
      console.log(err)
      return serverError()
    }
  }
}