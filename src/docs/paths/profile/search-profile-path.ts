export const searchProfilePath = {
  get:{
    description: 'Path to search profiles',
    tags:['Profile'],
    security:[{
      BearerAuth:[]
    }],
    parameters:[{
      name: 'q',
      in: 'query',
      description: 'q',
      required: true
    }],
    responses:{
      200:{
        description: 'sucess'
      }
    }
  }
}