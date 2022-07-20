export const signupPath  = {
  post: {
    tags:['Login'],  
    description: 'Path to user registration',
    requestBody:{
      content: {
        "application/json":{
          schema:{
            $ref: "#/schemas/signupParams"
          }
        }
      }
    },
    responses: {
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