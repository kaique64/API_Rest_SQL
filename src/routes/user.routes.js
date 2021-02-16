import { Router } from 'express';
import userController from '../controllers/User.controller';
import LoginRequired from '../middlewares/loginRequired';

const routes = Router();

routes.get('/', userController.index); // Não deve existir
// routes.get('/:id', userController.show); // Não deve existir

routes.post('/', userController.create);
routes.put('/', LoginRequired, userController.update);
routes.delete('/', LoginRequired, userController.delete);

export default routes;
