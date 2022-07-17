export type HttpRequest = {
  body?: any
  params?: any
  headers?: any
  query?: any

}

export type HttpResponse = {
  code?: number
  body?: any
  message?: string

}