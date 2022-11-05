const Sequilize = require('sequelize');
const { user, sale, product, saleProduct } = require('../database/models');
const formatSalesData = require('../helpers/formatSalesData');
const { development, test, production } = require('../database/config/config');

const sequelize = new Sequilize(development || test || production);

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

const addSale = async (userId, saleData) => {
  const newSale = await sequelize.transaction(async (transaction) => {
    const { products, ...saleInfo } = saleData;
    const saleDate = new Date();
    const status = 'Pendente';

    const addNewSale = await sale.create({
      ...saleInfo,
      userId,
      saleDate,
      status,
    }, { transaction });

    const insertProducts = products.map(({ productId, quantity }) => ({
      saleId: addNewSale.id, productId, quantity,
    }));
    await saleProduct.bulkCreate(insertProducts, { transaction });

    return addNewSale;
  });

  return newSale;
};

module.exports = {
  findAll,
  findById,
  addSale,
};
