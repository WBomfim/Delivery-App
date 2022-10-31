'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salesProductsTable = await queryInterface.createTable('salesProducts', {
      sale_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        },
      },
    });

    return salesProductsTable;
  },

  down: async (queryInterface) => await queryInterface.dropTable('salesProducts'),
};
