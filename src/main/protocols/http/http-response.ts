import { HttpResponse } from "./http-types";

export const badRequest = (message: string): HttpResponse => ({
  code: 400,
  body: message
})

export const ok = (body: any): HttpResponse => ({
  code: 200,
  body
})

export const serverError = (): HttpResponse => ({
  code: 500
})