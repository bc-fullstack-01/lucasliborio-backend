import express  from 'express'
import setupRoutes from '../config/routes'
import setuMiddlewares from '../config/middlewares'
import path from 'path'

const app = express()
app.set('views', path.join(__dirname, '..','views'));
app.set('view engine', 'ejs');

setuMiddlewares(app)
setupRoutes(app)

export { app }