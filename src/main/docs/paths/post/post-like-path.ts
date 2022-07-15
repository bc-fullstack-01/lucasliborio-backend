export const postLikePath = {
  post:{
    security: [{
      BearerAuth: []
    }],
    tags:['Post'],
    description: 'Path to like or unlike a Post',
    parameters:[{
      name: 'postId',
      in: 'path',
      description:'Post ID',
      required: true
    }],
    responses:{
      200: {
        content:{
          "application/json":{
            schema:{
              type:'object',
              properties:{
                sucess:{
                  type:"string"
                }
              }
            }
          }
        }
      }
    }
  }
}