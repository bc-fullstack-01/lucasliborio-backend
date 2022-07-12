import userModel from "../../db/mongo/models/user-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { badRequest, ok, serverError, unauthorized } from "../../protocols/http/http-response";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export class LoginUserController implements Controller {

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const somesecretdev = 'somesecretfordev'
    const { email, password } = request.body
    
    try {
      const userToLogin = await userModel.findOne({
        email
      })
      return await bcrypt.compare(password, userToLogin.password)
        ? ok({ acessToken: jwt.sign({ id: userToLogin._id, email: userToLogin.email }, somesecretdev) })
        : unauthorized()
    } catch (error) {
      console.log(error)
      if (error.name == "TypeError") return badRequest('invalid email or password, please try again')
      return serverError()
    }
  }
}