export const listPostPath = {
  get: {
    tags:['Post'],
    security: [{
      BearerAuth: []
    }],
    description: 'Path to list all post for some profile',
    parameters:[{
      name:"profileId",
      in:"path",
      required: true,
      description: 'Profile ID',
    }],
    responses:{
      200:{
        description: 'ok',
        content: {
          "application/json": {
            schema: {
              type:'array',
              items:{
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
                  items:{
                    type:"string"
                  }
                },
                likes: {
                  type: "array",
                  items:{
                    type:"string"
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
        content:{
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
      500:{
        descrption: 'server error',
        content:{
          "application/json":{
            schema:{
              type: "object",
              properties:{
                error:{
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