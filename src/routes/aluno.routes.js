import { Router } from 'express';
import alunoController from '../controllers/Aluno.controller';
import LoginRequired from '../middlewares/loginRequired';

const route = Router();

route.get('/', alunoController.index);
route.post('/', LoginRequired, alunoController.create);
route.put('/:id', LoginRequired, alunoController.update);
route.get('/:id', LoginRequired, alunoController.show);
route.delete('/:id', LoginRequired, alunoController.delete);

export default route;
