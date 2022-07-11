import { HttpResponse } from "./http";

export const badRequest = (message: string): HttpResponse => ({
    code:400,
    body:message
})

export const ok = (body: any): HttpResponse => ({
    code:200,
    body
})