import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
