import express  from 'express'
import setupRoutes from '../config/routes'
import setuMiddlewares from '../config/middlewares'
import setupSocketIo from './sockei-io/server-socket-io'


const app = express()

setupSocketIo(app)
setuMiddlewares(app)
setupRoutes(app)

export { app }