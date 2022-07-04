import { Application } from 'express';
import { bodyParser } from '../middlewares/body-parser';
import cors from 'cors'
export default (app: Application) => {
  app.use(bodyParser)
  app.use(cors())
}


