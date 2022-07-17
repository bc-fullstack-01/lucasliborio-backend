export const commentPath = {
  delete: {
    description: 'Path to delete a comment',
    tags: ['Comment'],
    security: [{
      BearerAuth: []
    }],
    parameters: [{
      name: 'postId',
      in: 'path',
      description: 'Post ID',
      required: true
    }, {
      name: 'commentId',
      in: 'path',
      description: 'Comment ID',
      required: true
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
  },
  put:{
    description: 'Path to update a Comment',
    tags:['Comment'],
    security:[{
      BearerAuth:[]
    }],
    parameters: [{
      name: 'postId',
      in: 'path',
      description: 'Post ID',
      required: true
    }, {
      name: 'commentId',
      in: 'path',
      description: 'Comment ID',
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