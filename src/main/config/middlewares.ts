import { Application, urlencoded } from 'express';
import { bodyParser } from '../middlewares/body-parser';
import cors from 'cors'
import methodOverride from 'method-override'

export default (app: Application) => {
  app.use(urlencoded({extended: false}))
  app.use(bodyParser)
  app.use(cors())
  app.use(methodOverride('_method'))
}


