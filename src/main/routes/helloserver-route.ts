import { Request, Response, Router } from 'express';

export default (router: Router): void => {
  router.get('/', (req: Request, res: Response): void => {
    res.send('hello from server')
  })
}