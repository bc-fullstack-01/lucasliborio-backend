export const followUnfollowPath = {
  post: {
    description:'Path to get Profile info',
    tags:['Profile'],
    security:[{
      BearerAuth:[]
    }],
    parameters:[{
      name:'profileId',
      in:'path',
      description:'Profile ID',
      required:'true'
    }],
    responses:{
      200: {
        description:'sucess',
        schema:{
          type: 'object',
          properties:{
            sucess: {
              type:'string'
            }
          }
        }
      }
    }
  }
}