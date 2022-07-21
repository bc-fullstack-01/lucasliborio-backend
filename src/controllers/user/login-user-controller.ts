import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { forbbiden, notFound, ok} from "../../protocols/http/http-response";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import profileModel from "../../db/mongo/models/profile-model";

export class LoginUserController implements Controller {

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const somesecretdev = 'somesecretfordev'
    const { email, password } = request.body
    console.log(password)
    const userData = await userModel.findOne({
      email
    })
    if (!userData) return notFound('PROFILE')
    const bool = await bcrypt.compare(password, userData.password)
    if (!bool) return forbbiden()
    const profileData = await profileModel.findOne({
      userId: userData._id
    })
    return ok({ accessToken: jwt.sign({ profileId: profileData._id, username:profileData.username }, somesecretdev) })
  }
}