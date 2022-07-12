import express  from 'express'
import setupRoutes from '../config/routes'
import setuMiddlewares from '../config/middlewares'


const app = express()

setuMiddlewares(app)
setupRoutes(app)

export { app }