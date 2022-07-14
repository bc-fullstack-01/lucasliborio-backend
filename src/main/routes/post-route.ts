import { Router } from "express";
import { expressAdapter } from "../adapters/express-adapter";
import { CreatePostController } from "../controllers/post/create-post-controller";
import { AuthMiddleware } from "../middleware/auth-middleware";

export default (route: Router) => {
  route.post('/post/new', AuthMiddleware, expressAdapter(new CreatePostController()))
}
