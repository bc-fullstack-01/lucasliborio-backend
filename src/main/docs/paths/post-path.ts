export const postPath = {
  get: {
    tags: ['Post'],
    description: 'Path to return one post',
    security: [{
      BearerAuth: []
    }],
    parameters: [{
      name: 'postId',
      in: 'path',
      description: 'Post ID',
      required: true
    }],
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
  },
  delete: {
    tags: ['Post'],
    security: [{
      BearerAuth: []
    }],
    description: "Path to delete a Post",
    parameters: [{
      name: "postId",
      in: 'path',
      description: 'Post ID',
      required: true,
    }],
    responses: {
      200: {
        description: 'deleted successfully',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Bad Request',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: {
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
                id: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    }
  },
  put: {
    tags: ['Post'],
    security: [{
      BearerAuth: []
    }],
    description: 'Path to update a single post',
    parameters: [{
      name: 'postId',
      in: 'path',
      description: 'Post ID',
      required: true
    }],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createPostParams"
          },
        },
        "multipart/form-data": {
          schema: {
            type: 'object',
            properties: {
              image: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'binary'
                }
              }
            }
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
              type: 'array',
              items: {
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
                  type: "string",
                }
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