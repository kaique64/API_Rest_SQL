const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    nome: 'John Doe',
    email: 'kaique@henrique.2005@.com',
    password_hash: await bcryptjs.hash('senha123', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'John Doe',
    email: 'kaique@henrique.2004@.com',
    password_hash: await bcryptjs.hash('senha1234', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'John Doe',
    email: 'kaique@henrique.2003@.com',
    password_hash: await bcryptjs.hash('senha12345', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: () => {},
};
