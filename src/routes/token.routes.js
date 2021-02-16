import { Router } from 'express';
import tokenController from '../controllers/Token.controller';

const route = Router();

route.post('/', tokenController.create);

export default route;
