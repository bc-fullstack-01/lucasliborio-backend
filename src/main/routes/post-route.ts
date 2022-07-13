import { Router } from "express";
import { expressAdapter } from "../adapters/express-adapter";
import { CreatePostController } from "../controllers/post/create-post-controller";
import { AuthMiddleware } from "../middleware/auth-middleware";

export default (route: Router) => {
  route.post('/posts/new', AuthMiddleware, expressAdapter(new CreatePostController()))
}
