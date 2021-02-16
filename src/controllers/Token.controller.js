import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Email ou senha invalido'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(404).json('Email não encontrado');
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha invalida'],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new TokenController();
