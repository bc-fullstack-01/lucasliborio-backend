import { Request, Response, Router } from 'express';
export default (router: Router): void => {
  router.route("/")
    .get((req: Request, res: Response) => {
      console.log(req.params)
      res.status(200).json({ params: req.params })
    })
    .post((req: Request, res: Response) => {
      console.log(req.body)
      res.status(201).json({ params: req.body }) 
    })

}