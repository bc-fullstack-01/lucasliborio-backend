import { NextFunction, Request, Response, Router } from 'express';
export default (router: Router): void => {
  router.param("id", (req: Request, res:Response, next: NextFunction, id:any ) => {
    console.log(`Request from ${req.params}`)
    console.log(`Request type ${req.method}`)
    console.log(`Request id: ${id}`)
    next()
  })
  .route('/:id')
    .get((req: Request, res: Response) => {
      console.log(req.params)
      res.status(200).json({ params: req.params })
    })
    .post((req: Request, res: Response) => {
      console.log(req.body)
      res.status(201).json({ body: req.body }) 
    })
}