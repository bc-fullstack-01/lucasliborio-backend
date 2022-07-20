import { Router } from "express";
import { expressAdapter } from "../adapters/express-adapter";
import { CreateCommentController } from "../controllers/coments/create-comment-controller";
import { DeleteCommentController } from "../controllers/coments/delete-comment-controller";
import { LikeUnlikeCommentController } from "../controllers/coments/like-comment-controller";
import { UpdateCommentController } from "../controllers/coments/update-comment-controller";
import { AuthMiddleware } from "../middleware/auth-middleware";

export default (router: Router): void => {
  router.delete('/post/:postId/comment/:commentId', AuthMiddleware, expressAdapter(new DeleteCommentController()))
  router.post('/post/:postId/comment', AuthMiddleware, expressAdapter(new CreateCommentController()))
  router.put('/post/:postId/comment/:commentId', AuthMiddleware, expressAdapter(new UpdateCommentController()))
  router.post('/post/:postId/comment/:commentId/like', AuthMiddleware, expressAdapter(new LikeUnlikeCommentController))
  
}