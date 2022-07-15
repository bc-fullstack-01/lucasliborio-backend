import { Router } from "express";
import { expressAdapter } from "../adapters/express-adapter";
import { CreatePostController } from "../controllers/post/create-post-controller";
import { DeletePostController } from "../controllers/post/delete-post-controller";
import { GetPostById } from "../controllers/post/get-post-by-id-controller";
import { LikeUnlikePostController } from "../controllers/post/like-unlike-post-controller";
import { UpdatePostController } from "../controllers/post/update-post-controller";
import { AuthMiddleware } from "../middleware/auth-middleware";

export default (route: Router) => {
  route.post('/post/new', AuthMiddleware, expressAdapter(new CreatePostController()))
  route.get('/post/:postId', AuthMiddleware, expressAdapter(new GetPostById()))
  route.delete('/post/:postId', AuthMiddleware, expressAdapter(new DeletePostController()))
  route.put('/post/:postId', AuthMiddleware, expressAdapter(new UpdatePostController()))
  route.post('/post/:postId/like', AuthMiddleware, expressAdapter(new LikeUnlikePostController()))

}
