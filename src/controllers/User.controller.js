import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const userNovo = await User.create(req.body);
      const { id, nome, email } = userNovo;
      res.json({ id, nome, email });
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((erro) => erro.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      res.json(users);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      res.json({ id, nome, email });
    } catch (error) {
      console.log(error);
      res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuarios inexistente'],
        });
      }

      const updatedData = await user.update(req.body);
      const { id, nome, email } = updatedData;
      return res.json({ id, nome, email });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((erro) => erro.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuarios inexistente'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
