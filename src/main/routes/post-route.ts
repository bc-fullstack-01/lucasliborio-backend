import { Request, Response, Router } from 'express';
import { postsController } from '../controllers/post-controller'
export default (router: Router): void => {

  router.route("/posts")
  .all()
  .get(postsController.list)
  .post(postsController.save)
  
  router.route('/posts/new')
  .get(postsController.new) // pagina para enviar para post

  router.route('/posts/:id')
  .get(postsController.show)
  .put()
  .delete(postsController.delete)

}