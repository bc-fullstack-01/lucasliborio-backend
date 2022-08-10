import express from 'express'
import setupRoutes from '../config/routes'
import setuMiddlewares from '../config/middlewares'
import setupSocketIo from './socket-io/server-socket-io'


const app = express()

app.get('/', (req, res) => {
  res.redirect('/api-docs')
})
setuMiddlewares(app)
setupRoutes(app)
const { server, socketsOnline } = setupSocketIo(app)
export { server, socketsOnline }