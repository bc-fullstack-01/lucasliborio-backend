import { HttpResponse, HttpRequest } from "../http/http";

export interface Controller {
    handle(request: HttpRequest):Promise<HttpResponse>
}