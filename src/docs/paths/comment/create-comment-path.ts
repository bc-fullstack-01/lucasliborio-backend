export const createCommentPath = {
  post:{
    description:'Path to create a new comment single Post',
    tags:['Comment'],
    security:[{
      BearerAuth:[]
    }],
    parameters:[{
      name:'postId',
      in:'path',
      description:'Post ID',
      required: true
    }],
    requestBody:{
      content:{
        "application/json":{
          schema:{
            $ref: '#/schemas/createCommentParamsRB'
          }
        }
      }
    },
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