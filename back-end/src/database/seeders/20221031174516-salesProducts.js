module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('salesProducts',
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 2,
        },
        {
          sale_id: 1,
          product_id: 2,
          quantity: 4,
        },
        {
          sale_id: 1,
          product_id: 3,
          quantity: 2,
        },
        {
          sale_id: 2,
          product_id: 4,
          quantity: 2,
        },
        {
          sale_id: 2,
          product_id: 5,
          quantity: 2,
        },
      ], { timestamps: false }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};
