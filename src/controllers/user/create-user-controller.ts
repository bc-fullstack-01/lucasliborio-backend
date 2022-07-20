import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { badRequest, ok, serverError } from "../../protocols/http/http-response";
import bcrypt from 'bcrypt'
import profileModel from "../../db/mongo/models/profile-model";


export class CreateUserController implements Controller {

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { username, password, passwordConfirmation, email } = request.body

    if (!passwordConfirmation === password) return badRequest('passwords don\'t match')

    const passwordEncrypted = await bcrypt.hash(password, 10)
    await userModel.create({
      username,
      email,
      password: passwordEncrypted
    }).then(async (userData) => {
      await profileModel.create({
        username: userData.username,
        userId: userData._id
      })
    })
    return ok({ ok: "registration succeeds" })
  }
}