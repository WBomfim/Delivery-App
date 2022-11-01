const { user, sale, product } = require('../database/models');

const ASSOCIATIONS = [
  { model: user, as: 'user', attributes: { exclude: ['id', 'password'] } },
  { model: user, as: 'seller', attributes: { exclude: ['id', 'password'] } },
  { 
    model: product,
    as: 'products',
    through: { attributes: ['quantity'], as: 'productQuantity' },
  },
];

const findAll = async () => {
  const allSales = await sale.findAll({
    include: ASSOCIATIONS,
  });
  return allSales;
};

module.exports = {
  findAll,
};
