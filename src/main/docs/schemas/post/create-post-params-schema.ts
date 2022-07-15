export const createPostParamsSchema = {
  type: 'object',
  description: 'fields to create new post',
  properties: {
    title:{
      type: 'string'
    },
    description:{
      type: 'string'
    },
  }
}
