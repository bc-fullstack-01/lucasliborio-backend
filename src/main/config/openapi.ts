import { createPostPath } from "../docs/paths/post/create-post-path";
import { postPath } from "../docs/paths/post/post-path";
import { listPostPath } from "../docs/paths/post/list-post-path";
import { loginPath } from "../docs/paths/login/login-path";
import { signupPath } from "../docs/paths/login/signup-path";
import { createPostParamsSchema } from "../docs/schemas/post/create-post-params-schema";
import { loginParamsSchema } from "../docs/schemas/login/login-params-schema";
import { signupParamsSchema } from "../docs/schemas/login/signup-params-schema";
import { postLikePath } from "../docs/paths/post/post-like-path";
import { createCommentRB } from "../docs/schemas/comment/create-comment-rb";
import { createCommentPath } from "../docs/paths/comment/create-comment-path";
import { commentPath } from "../docs/paths/comment/comment-path";
import { likeCommentPath } from "../docs/paths/comment/like-comment-path";
import { profileSchema } from "../docs/schemas/profile/profile-schema";
import { profilePath } from "../docs/paths/profile/profile-path";
import { followUnfollowPath } from "../docs/paths/profile/follow-unfollow-profile-path";

export const swaggerConfig =  {
  openapi: '3.0.0',
  info: {
    title:'Social SysMap App API',
    description:'Project for a social media',
    version:'1.0.0',
    contact: {
      name:'Lucas Libório Troncoso',
      url: 'https://github.com/lucasliborio',
      email: 'lucasl.troncoso@gmail.com'
    }
  },
  servers:[{
    url: '/v1',
    description:'Social SysMap'
  }],
  paths: {
    '/signup': signupPath,
    '/login':loginPath,
    '/post/new':createPostPath,
    '/post/{profileId}':listPostPath,
    '/post/{postId}':postPath,
    '/post/{postId}/like': postLikePath,
    '/post/{postId}/comment':createCommentPath,
    '/post/{postId}/comment/{commentId}': commentPath,
    '/post/{postId}/comment/{commentId}/like':likeCommentPath,
    '/profile/{profileId}':profilePath,
    '/profile/{profileId}/follow': followUnfollowPath
  
  },
  schemas: {
    signupParams: signupParamsSchema,
    loginParams:loginParamsSchema,
    createPostParams: createPostParamsSchema,
    createCommentParamsRB: createCommentRB,
    profileSchema: profileSchema
  },
  components:{
    securitySchemes:{
      BearerAuth:{
        type:'http',
        scheme:'bearer'
      }
    }
  }
}