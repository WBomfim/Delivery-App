const { user, sale, product } = require('../database/models');
const formatSalesData = require('../helpers/formatSalesData');

const ASSOCIATIONS = [
  { model: user, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
  { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
  { 
    model: product,
    as: 'products',
    attributes: { exclude: ['urlImage'] },
    through: { attributes: ['quantity'], as: 'productQuantity' },
  },
];

const findAll = async () => {
  const allSales = await sale.findAll({
    include: ASSOCIATIONS,
  });
  const formatedSales = allSales.map((currSale) => formatSalesData(currSale));

  return formatedSales;
};

const findById = async (id) => {
  const saleById = await sale.findByPk(id, {
    include: ASSOCIATIONS,
  });
  const formatedSale = formatSalesData(saleById);

  return formatedSale;
};

module.exports = {
  findAll,
  findById,
};
