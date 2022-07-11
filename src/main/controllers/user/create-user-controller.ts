import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { badRequest, ok } from "../../protocols/http/http-response";
import bcrypt from 'bcrypt'


export class CreateUserController implements Controller {

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name, password, passwordConfirmation, email } = request.body
    if (passwordConfirmation === password) return badRequest('passwords don\'t match')
    const passwordEncrypted = await bcrypt.hash(password, 10)
    const userCreated = await userModel.create({
      name,
      email,
      password: passwordEncrypted
    })
    return ok(userCreated)
  }
}