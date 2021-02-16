import { Router } from 'express';
import homeController from '../controllers/Home.controller';

const route = Router();

route.get('/', homeController.index);

export default route;
