import express  from 'express'
import setupRoutes from '../config/routes'
const app = express()

setupRoutes(app)
export { app }