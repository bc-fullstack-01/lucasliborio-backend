import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { users } from '../../config/seed'
import userModel from "../../db/mongo/models/user-model";
import profileModel from "../../db/mongo/models/profile-model";
import { ok } from "../../protocols/http/http-response";
import postModel from "../../db/mongo/models/post-model";



export class SeedController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const profiles = []
    for (let i = 0; i < users.length; i++) {
      await userModel.create(users[i]).then(async (createdUser) => {
        return await profileModel.create({
          userId: createdUser.id,
          username: createdUser.username
        }).then(async (createdProfile) => {
          profiles.push(createdProfile)
        })
      })
    }
    for (let x = 0; x < profiles.length; x++) {
      await postModel.create({
        title: `primeiro post do ${profiles[x].username}`,
        description: `descrição para o post do ${profiles[x].username}`,
        profileId: profiles[x]._id
      })
      const idsProfiles = profiles.map(profiles => profiles._id).filter(id => id !== profiles[x]._id)
      await postModel.updateOne({
        profileId: profiles[x]._id
      }, { $push: { likes: { $each: idsProfiles } } })
      await profileModel.updateOne({
        _id: profiles[x]._id
      }, {
        $push: {
          followers: { $each: idsProfiles },
          following: { $each: idsProfiles }
        }
      })
    }
    return ok('seed done')
  }
}