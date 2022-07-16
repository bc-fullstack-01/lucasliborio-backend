export const profileSchema = {
  type: 'object',
  properties:{
    _id: {
      type:'string'
    },
    followers:{
      type: 'array',
      items:{
        type:'object'
      }
    },
    following:{
      type: 'array',
      items:{
        type:'object'
      }
    },
    createdAt:{
      type: 'string',
      format:'date-time'
    },
    updatedAt:{
      type: 'string',
      format:'date-time'
    }
  }
}