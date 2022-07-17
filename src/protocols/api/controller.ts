import { HttpResponse, HttpRequest } from "../http/http-types";

export interface Controller {
    handle(request: HttpRequest):Promise<HttpResponse>
}