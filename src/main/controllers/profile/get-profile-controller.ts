import profileModel from "../../db/mongo/models/profile-model";
import { Controller } from "../../protocols/api/controller";
import { badRequest, serverError,ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class GetProfileController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { profileId } = request.params
    console.log(profileId)
    try {
      const profileToSend = await profileModel.findOne({_id:profileId}).populate('posts').populate('followers').populate('following')
      if (profileToSend) return ok(profileToSend)
      else return badRequest('missing somenthing, try again')
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}