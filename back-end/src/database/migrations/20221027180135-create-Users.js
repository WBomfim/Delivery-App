module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });

    return UsersTable;
  },

  down: async (queryInterface) => await queryInterface.dropTable('users'),
};
