
import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { badRequest, serverError, ok} from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class GetPostById implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {

    const { postId } = request.params
    console.log(postId)
    console.log(request)
    try {
      const postToSend = await postModel.findById(postId)
      console.log(postToSend)
      
      if(!postToSend) return badRequest('invalid post id')
      return ok(postToSend)

    } catch (error) {
      console.log(error)
        return serverError()
    } 
  }
}