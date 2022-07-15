import { createPostPath } from "../docs/paths/create-post-path";
import { postPath } from "../docs/paths/post-path";
import { listPostPath } from "../docs/paths/list-post-path";
import { loginPath } from "../docs/paths/login-path";
import { signupPath } from "../docs/paths/signup-path";
import { createPostParamsSchema } from "../docs/schemas/create-post-params-schema";
import { loginParamsSchema } from "../docs/schemas/login-params-schema";
import { signupParamsSchema } from "../docs/schemas/signup-params-schema";
import { postLikePath } from "../docs/paths/post-like-path";

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
    '/post/{postId}/like': postLikePath
  
  },
  schemas: {
    signupParams: signupParamsSchema,
    loginParams:loginParamsSchema,
    createPostParams: createPostParamsSchema
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