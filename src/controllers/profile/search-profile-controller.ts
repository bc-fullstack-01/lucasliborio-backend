import profileModel from "../../db/mongo/models/profile-model";
import { Controller } from "../../protocols/api/controller";
import { ok, serverError } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class SearchProfileController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { q } = request.query
    const searchResult = await profileModel.find({
      $text: {
        $search: `${q}`
      }
    }, {
      score: { $meta: "textScore" }
    }).sort({ score: { $meta: "textScore" } })
    return ok(searchResult)
  }
}