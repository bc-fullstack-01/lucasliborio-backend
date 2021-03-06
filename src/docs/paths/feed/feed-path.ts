export const feedPath = {
  get: {
    description: 'Path to create a feed',
    tags: ['Feed'],
    security: [{
      BearerAuth: []
    }],
    parameters: [{
      name: 'page',
      in: 'query',
      description: 'Current page',
      required: true
    }],
    responses: {
      200: {
        description: 'success'
      }
    }
  }

}