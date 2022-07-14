import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { badRequest, ok, serverError, unauthorized } from "../../protocols/http/http-response";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import profileModel from "../../db/mongo/models/profile-model";

export class LoginUserController implements Controller {

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const somesecretdev = 'somesecretfordev'
    const { email, password } = request.body

    try {
      const userData = await userModel.findOne({
        email
      })
      await bcrypt.compare(password, userData.password)
      const profileData = await profileModel.findOne({
        userId: userData._id
      })
      return ok({ acessToken: jwt.sign({ profileId: profileData._id }, somesecretdev) })
    } catch (error) {
      console.log(error)
      if (error.name == "TypeError") return badRequest('invalid email or password, please try again')
      return serverError()
    }
  }
}