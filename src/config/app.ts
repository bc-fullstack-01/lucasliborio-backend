import express  from 'express'
import setupRoutes from '../config/routes'
import setuMiddlewares from '../config/middlewares'
import setupSocketIo from './sockei-io/server-socket-io'
import { join } from 'path'

const app = express()
app.use(express.static(join(__dirname, '..', '/public')))

setupSocketIo(app)
setuMiddlewares(app)
setupRoutes(app)

export { app }