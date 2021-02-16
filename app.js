import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import HomeRoutes from './src/routes/home.routes';
import UserRoutes from './src/routes/user.routes';
import TokenRoutes from './src/routes/token.routes';
import AlunoRoutes from './src/routes/aluno.routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', HomeRoutes);
    this.app.use('/users/', UserRoutes);
    this.app.use('/tokens/', TokenRoutes);
    this.app.use('/alunos/', AlunoRoutes);
  }
}

export default new App().app;
