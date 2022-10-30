module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [
        {
          id: 1,
          name: 'antarctica pilsen 300ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 2,
          name: 'becks 330ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 3,
          name: 'brahma 600ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 4,
          name: 'brahma duplo malte 350ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 5,
          name: 'becks 330ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 6,
          name: 'heineken 600ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 7,
          name: 'skol 269ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 8,
          name: 'skol beats senses 269ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 9,
          name: 'skol beats senses 313ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 10,
          name: 'skol lata 350ml',
          price: 5.00,
          url_image: 'Foto',
        },
        {
          id: 11,
          name: 'stella artois 275ml',
          price: 5.00,
          url_image: 'Foto',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
