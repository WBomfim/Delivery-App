module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('products',
      [
        {
          id: 1,
          name: 'antarctica pilsen 300ml',
          price: 2.49,
          url_image: './back-end/src/images/01.jpg',
        },
        {
          id: 2,
          name: 'becks 330ml',
          price: 4.49,
          url_image: './back-end/src/images/02.jpg',
        },
        {
          id: 3,
          name: 'brahma 600ml',
          price: 5.20,
          url_image: './back-end/src/images/04.jpg',
        },
        {
          id: 4,
          name: 'brahma duplo malte 350ml',
          price: 2.79,
          url_image: './back-end/src/images/05.jpg',
        },
        {
          id: 5,
          name: 'becks 600ml',
          price: 4.26,
          url_image: './back-end/src/images/03.jpg',
        },
        {
          id: 6,
          name: 'heineken 600ml',
          price: 7.50,
          url_image: './back-end/src/images/06.jpg',
        },
        {
          id: 7,
          name: 'skol 269ml',
          price: 2.19,
          url_image: './back-end/src/images/07.jpg',
        },
        {
          id: 8,
          name: 'skol beats senses 269ml',
          price: 3.57,
          url_image: './back-end/src/images/08.jpg',
        },
        {
          id: 9,
          name: 'skol beats senses 313ml',
          price: 4.49,
          url_image: './back-end/src/images/09.jpg',
        },
        {
          id: 10,
          name: 'skol lata 350ml',
          price: 2.50,
          url_image: './back-end/src/images/10.jpg',
        },
        {
          id: 11,
          name: 'stella artois 275ml',
          price: 3.50,
          url_image: './back-end/src/images/11.jpg',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
