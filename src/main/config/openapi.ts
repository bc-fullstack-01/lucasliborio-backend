import { loginPath } from "../docs/paths/login-path";
import { signupPath } from "../docs/paths/signup-path";
import { loginParamsSchema } from "../docs/schemas/login-params.schema";
import { signupParamsSchema } from "../docs/schemas/signup-params-schema";

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
    '/login':loginPath
  },
  schemas: {
    signupParams: signupParamsSchema,
    loginParams:loginParamsSchema
  }
}