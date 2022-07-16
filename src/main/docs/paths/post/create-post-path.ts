export const createPostPath = {
  post: {
    tags: ['Post'],
    security: [{
      BearerAuth: []
    }],
    description: 'Path to create a new post in social media',
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createPostParams"
          },
        },
        "application/octet-stream": {
          schema: {
            image: {
              type: "string",
              format: "binary"
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'post created successfully',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                },
                description: {
                  type: "string",
                },
                _id: {
                  type: "string",
                },
                profileId: {
                  type: "string",
                },
                comments: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                },
                likes: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                },
              }
            }
          }
        }
      },
      500: {
        descrption: 'server error',
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