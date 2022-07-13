export const createPostPath = {
  post: {
    tags:['Post'],
    description: 'Path to create a new post in social media',
    requestBody:{
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createPostParams"
          }
        }
      }
    }
    
  }
}