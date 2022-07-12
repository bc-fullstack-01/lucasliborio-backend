import { Middleware } from "../protocols/api/middleware";
import { HttpRequest, HttpResponse } from "../protocols/http/http-types";
import jwt from "jsonwebtoken";
import { ok, unauthorized } from "../protocols/http/http-response";

export class AuthMiddleware implements Middleware {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const somesecretdev = 'somesecretfordev'
    const payload = jwt.verify(request.headers.authorization, somesecretdev)
    if (payload) return ok(payload)
    return unauthorized()
  }
}