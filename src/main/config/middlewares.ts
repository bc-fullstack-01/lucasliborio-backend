import { Application, urlencoded, json } from 'express';

import cors from 'cors'
import { serve, setup } from 'swagger-ui-express';
import { swaggerConfig } from './openapi';

export default (app: Application) => {
  app.use(json())
  app.use(cors())
  app.use('/api-docs', serve, setup(swaggerConfig))
}


