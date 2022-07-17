export const likeCommentPath = {
  post:{
    description:'Path to like/unlike Comments',
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