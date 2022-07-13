export const loginParamsSchema = {
  type: 'object',
  description: 'fields to registration',
  properties: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
    
  },
  required: ['email', 'password', ]
}