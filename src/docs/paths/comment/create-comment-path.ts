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
      200:{
        description: 'ok',
        content:{
          "application/json":{
            schema:{
              type:'object',
              properties:{
                success:{
                  type:'string'
                }
              }
            }
            
          }
        }
      }
    }
  }
}