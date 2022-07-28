import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { badRequest, ok } from "../../protocols/http/http-response";
import bcrypt from 'bcrypt'
import profileModel from "../../db/mongo/models/profile-model";


export class CreateUserController implements Controller {

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { username, password, passwordConfirmation, email } = request.body
    if (passwordConfirmation !== password) return badRequest('passwords don\'t match')
    const passwordEncrypted = await bcrypt.hash(password, 10)

    const userToCreate = await userModel.create({
      username,
      email,
      password: passwordEncrypted
    })
    await profileModel.create({
      username: userToCreate.username,
      userId: userToCreate._id
    })
    return ok({ ok: "registration succeeds" })
  }
}