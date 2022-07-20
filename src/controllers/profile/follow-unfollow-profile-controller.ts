import { publishEvent } from "../../broker/pub";
import profileModel from "../../db/mongo/models/profile-model";
import { Controller } from "../../protocols/api/controller";
import { ok, notFound, badRequest } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class FollowUnfollowProfileController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { profileId } = request.params
    const { payload } = request.body

    const profileToFollowUnfollow = await profileModel.findById(profileId)
    if (!profileToFollowUnfollow) return notFound('PROFILE')

    if (profileToFollowUnfollow.id.toString() !== payload._id.toString()){
      const indexToMatch = payload.following.indexOf(profileToFollowUnfollow.id)
      if (indexToMatch === -1) {
  
        await profileModel.updateOne({ _id: payload._id }, {
          $push: {
            following: profileId
          }
        })
        await profileModel.updateOne({ _id: profileId }, {
          $push: {
            followers: payload._id
          }
        })
        await publishEvent('follow', profileToFollowUnfollow, payload)
      } else {
        await profileModel.updateOne({ _id: payload._id }, {
          $pull: {
            following: profileId
          }
        })
        await profileModel.updateOne({ _id: profileId }, {
          $pull: {
            followers: payload._id
          }
        })
      }
      return indexToMatch === -1 ? ok({ sucess: 'follow profile successfully' }) : ok({ sucess: 'unfollow profile successfully' })
    }
    return badRequest('profiles cannot follow themselves')
  }
}