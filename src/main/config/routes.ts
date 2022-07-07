import { Router, Express } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

const router = Router()
export default async (app: Express): Promise<void> => {
  
  const routes = readdirSync(path.resolve(__dirname, '..', 'routes')).filter(x => x.includes('route'))
  routes.forEach(async route => (await import(`../routes/${route}`)).default(router))
  app.use('/v1', router)
  
}