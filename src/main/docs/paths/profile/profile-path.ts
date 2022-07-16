export const profilePath = {
  get: {
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
        content:{
          "application/json":{
            schema:{
              $ref: "#/schemas/profileSchema"
            }
          }
        }
      }
    }
  }
}