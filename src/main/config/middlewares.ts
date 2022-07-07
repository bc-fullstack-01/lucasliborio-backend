import { Application, urlencoded } from 'express';
import cors from 'cors'
import methodOverride from 'method-override'
import { json } from 'express';

export default (app: Application) => {
  app.use(urlencoded({extended: false}))
  app.use(cors())
  app.use(json())
  app.use(methodOverride('_method'))
}


