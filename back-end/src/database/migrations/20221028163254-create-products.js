'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productsTable = await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.REAL
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });

    return productsTable;
  },

  down: async (queryInterface) => await queryInterface.dropTable('products'),
};
