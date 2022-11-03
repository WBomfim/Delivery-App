module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('sales',
      [
        {
          id: 1,
          user_id: 3,
          seller_id: 2,
          total_price: 33.34,
          delivery_address: 'Rua das Flores',
          delivery_number: '123',
          sale_date: new Date(),
          status: 'Pendente',
        },
        {
          id: 2,
          user_id: 3,
          seller_id: 2,
          total_price: 14.10,
          delivery_address: 'Rua das Rosas',
          delivery_number: '321',
          sale_date: new Date(),
          status: 'Pendente',
        },
      ],
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
