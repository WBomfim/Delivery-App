module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [
        {
          id: 1,
          name: 'antarctica pilsen 300ml',
          price: 2.49,
          url_image: './back-end/src/images/01',
        },
        {
          id: 2,
          name: 'becks 330ml',
          price: 4.49,
          url_image: './back-end/src/images/02',
        },
        {
          id: 3,
          name: 'brahma 600ml',
          price: 5.20,
          url_image: './back-end/src/images/04',
        },
        {
          id: 4,
          name: 'brahma duplo malte 350ml',
          price: 2.79,
          url_image: './back-end/src/images/05',
        },
        {
          id: 5,
          name: 'becks 600ml',
          price: 4.26,
          url_image: './back-end/src/images/03',
        },
        {
          id: 6,
          name: 'heineken 600ml',
          price: 7.50,
          url_image: './back-end/src/images/06',
        },
        {
          id: 7,
          name: 'skol 269ml',
          price: 2.19,
          url_image: './back-end/src/images/07',
        },
        {
          id: 8,
          name: 'skol beats senses 269ml',
          price: 3.57,
          url_image: './back-end/src/images/08',
        },
        {
          id: 9,
          name: 'skol beats senses 313ml',
          price: 4.49,
          url_image: './back-end/src/images/09',
        },
        {
          id: 10,
          name: 'skol lata 350ml',
          price: 2.50,
          url_image: './back-end/src/images/10',
        },
        {
          id: 11,
          name: 'stella artois 275ml',
          price: 3.50,
          url_image: './back-end/src/images/11',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
