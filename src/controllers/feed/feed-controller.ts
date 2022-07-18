import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";
import { ok } from "../../protocols/http/http-response";

export class FeedController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {

    console.log(request.body.payload)

    return ok('test')
  }
}