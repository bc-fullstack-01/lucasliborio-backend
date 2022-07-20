export const searchProfilePath = {
  get:{
    description: 'Path to search profiles',
    tags:['Profile'],
    security:[{
      BearerAuth:[]
    }],
    parameters:[{
      name: 'q',
      in: 'query',
      description: 'q',
      required: true
    }],
    responses:{
      200: {
        description: 'ok',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ok: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      400: {
        description: 'bad request',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      401: {
        description: 'unauthorized',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      403: {
        description: 'not found',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      500: {
        description: 'server error',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    }
  }
}