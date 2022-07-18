import { Router } from "express"
import { expressAdapter } from "../adapters/express-adapter"
import { ListPostsController } from "../controllers/post/list-post-controller"
import { FollowUnfollowProfileController } from "../controllers/profile/follow-unfollow-profile-controller"
import { GetProfileController } from "../controllers/profile/get-profile-controller"
import { SearchProfileController } from "../controllers/profile/search-profile-controller"
import { AuthMiddleware } from "../middleware/auth-middleware"

export default (router:Router) => {
  router.get('/profile/search', AuthMiddleware, expressAdapter(new SearchProfileController()))
  router.get('/profile/:profileId', AuthMiddleware, expressAdapter(new GetProfileController()))
  router.post('/profile/:profileId/follow', AuthMiddleware, expressAdapter(new FollowUnfollowProfileController()))
  router.get('/profile/:profileId/posts', AuthMiddleware, expressAdapter(new ListPostsController()))
  
}