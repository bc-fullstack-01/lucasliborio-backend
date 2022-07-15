export const signupParamsSchema = {
  type: 'object',
  description: 'fields to registration',
  properties: {
    email: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirmation: {
      type: 'string'
    }
    
  },
  required: ['email', 'password', 'name', 'passwordConfirmation']
}