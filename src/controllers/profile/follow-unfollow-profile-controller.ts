import { publishEvent } from "../../broker/pub";
import profileModel from "../../db/mongo/models/profile-model";
import { Controller } from "../../protocols/api/controller";
import { badRequest, serverError, ok } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class FollowUnfollowProfileController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { profileId } = request.params
    const { payload } = request.body

    const profileToFollowUnfollow = await profileModel.findById(profileId)
    if (!profileToFollowUnfollow) return badRequest('profile dont exist')

    const profileOwner = await profileModel.findById(payload.profileId)
    try {
      if (profileOwner) {
        const indexToMatch = profileOwner.following.indexOf(profileToFollowUnfollow.id)
        if (indexToMatch === -1) {

          await profileModel.updateOne({ _id: payload.profileId }, {
            $push: {
              following: profileId
            }
          })
          await profileModel.updateOne({ _id: profileId }, {
            $push: {
              followers: payload.profileId
            }
          })
          await publishEvent('follow', profileToFollowUnfollow, profileOwner)
        } else {
          await profileModel.updateOne({ _id: payload.profileId }, {
            $pull: {
              following: profileId
            }
          })
          await profileModel.updateOne({ _id: profileId }, {
            $pull: {
              followers: payload.profileId
            }
          })
        }
        return indexToMatch === -1 ? ok({ sucess: 'follow profile successfully' }) : ok({ sucess: 'unfollow profile successfully' })
      }
    } catch (error) {
      return serverError()
    }

  }
}