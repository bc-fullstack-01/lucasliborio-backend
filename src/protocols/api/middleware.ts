import { HttpResponse, HttpRequest } from "../http/http-types";

export interface Middleware {
    handle(request: HttpRequest):Promise<HttpResponse>
}