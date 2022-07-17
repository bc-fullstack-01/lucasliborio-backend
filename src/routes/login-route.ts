import { Router } from 'express';
import { join, resolve } from 'path';
import { expressAdapter } from '../adapters/express-adapter';
import { CreateUserController } from '../controllers/user/create-user-controller';
import { LoginUserController } from '../controllers/user/login-user-controller';

export default (router: Router): void => {
  router.get('/', (req, res) => {
    res.render('/index.html')
  })
  router.post("/signup", expressAdapter(new CreateUserController()))
  router.post("/login", expressAdapter(new LoginUserController()))
}