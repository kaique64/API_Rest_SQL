import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();

    res.json(alunos);
  }

  async create(req, res) {
    try {
      const user = await Aluno.create(req.body);
      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['É necessário um ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno inexistente'],
        });
      }

      return res.json(aluno);
    } catch (error) {
      console.log(error);
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['É necessário um ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno inexistente'],
        });
      }

      const updatedData = await aluno.update(req.body);

      return res.json(updatedData);
    } catch (error) {
      console.log(error);
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['É necessário um ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno inexistente'],
        });
      }

      await aluno.destroy();
      return res.json({ msg: 'Aluno excluído com sucesso!' });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
