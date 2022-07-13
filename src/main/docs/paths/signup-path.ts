export const signupPath  = {
  post: {
    tags:['Login'],
    description: 'Path to user registration',
    requestBody:{
      content: {
        "application/json":{
          schema:{
            $ref: "#/schemas/signupParams"
          }
        }
      }
    },
    responses: {
      200: {
        description: 'sucess registration'
      },
      400: {
        description: 'password dont matches'
      },
      500: {
        description: 'server error'
      },
      
    }
  }
}