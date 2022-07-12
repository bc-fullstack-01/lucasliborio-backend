import { HttpResponse } from "./http-types";

export const badRequest = (message: any): HttpResponse => ({
  code: 400,
  body: {error: message}
})

export const ok = (body: any): HttpResponse => ({
  code: 200,
  body
})

export const serverError = (): HttpResponse => ({
  code: 500,
  body: {error: 'ServerError'}
})

export const unauthorized  = (): HttpResponse => ({
  code: 401,
  body: {error: 'unauthorized'}
})