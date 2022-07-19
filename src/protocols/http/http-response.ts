import { HttpResponse } from "./http-types";

export const ok = (body: any): HttpResponse => ({
  code: 200,
  body
})
export const badRequest = (message: any): HttpResponse => ({
  code: 400,
  body: {error: message}
})

export const unauthorized  = (): HttpResponse => ({
  code: 401,
  body: {error: 'UNAUTHORIZED'}
})
export const forbbiden = (): HttpResponse =>({
  code: 403,
  body: {error: 'FORBBIDEN'}
})
export const notFound  = (item: string): HttpResponse => ({
  code: 404,
  body: {error: `${item} NOTFOUND`}
})
export const serverError = (): HttpResponse => ({
  code: 500,
  body: {error: 'SERVERERROR'}
})

