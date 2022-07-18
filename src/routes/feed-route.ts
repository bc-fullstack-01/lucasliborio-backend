import { Router } from "express";
import { expressAdapter } from "../adapters/express-adapter";
import { FeedController } from "../controllers/feed/feed-controller";
import { SeedController } from "../controllers/seed/seed-controller";
import { AuthMiddleware } from "../middleware/auth-middleware";

export default (router: Router) => {
  router.get('/feed', AuthMiddleware, expressAdapter(new FeedController()))
  router.get('/seed', expressAdapter(new SeedController()))
}