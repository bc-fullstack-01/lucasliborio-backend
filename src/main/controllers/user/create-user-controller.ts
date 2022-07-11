import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocolos/api/controller";
import { HttpRequest, HttpResponse } from "../../protocolos/http/http";
import { badRequest, ok } from "../../protocolos/http/http-response";
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