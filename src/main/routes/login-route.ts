import { Router } from 'express';
import { expressAdapter } from '../adapters/express-adapter';
import { CreateUserController } from '../controllers/user/create-user-controller';
import { LoginUserController } from '../controllers/user/login-user-controller';

export default (router: Router): void => {
  router.get('/', (req, res) => {
    res.send('TUDO OK')
  })
  router.post("/signup", expressAdapter(new CreateUserController()))
  router.post("/login", expressAdapter(new LoginUserController()))
}