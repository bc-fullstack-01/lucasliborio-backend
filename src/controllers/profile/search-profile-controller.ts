import profileModel from "../../db/mongo/models/profile-model";
import { Controller } from "../../protocols/api/controller";
import { ok, serverError } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class SearchProfileController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { q } = request.query
    console.log(q)
    try {
      const searchResult = await profileModel.find({
        $text: {
          $search: `${q}`
        }
      }, {
        score: { $meta: "textScore" }
      }).sort({ score: { $meta: "textScore" } })
      console.log(searchResult)
      return ok(searchResult)

    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}