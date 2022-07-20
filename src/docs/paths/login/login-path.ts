export const loginPath = {
  post: {
    tags:['Login'],
    description: 'Path for user authentication',
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/loginParams"
          }
        }
      }
    },
    responses: {
      200: {
        description: 'sucess registration',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                },
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