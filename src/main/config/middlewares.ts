import { Application, urlencoded, json } from 'express';

import cors from 'cors'

export default (app: Application) => {
  app.use(json())
  app.use(cors())
  
}


