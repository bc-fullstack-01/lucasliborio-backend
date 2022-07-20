import profileModel from "../../db/mongo/models/profile-model";
import { Controller } from "../../protocols/api/controller";
import { badRequest, notFound, ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class GetProfileController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { profileId } = request.params
    const profileToSend = await profileModel.findOne({ _id: profileId }).populate('posts').populate('followers').populate('following')
    if (!profileToSend) notFound('PROFILE')
    return ok(profileToSend)
  }
}