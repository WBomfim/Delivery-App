const Sequilize = require('sequelize');
const { user, sale, product, salesProduct } = require('../database/models');
const formatSalesData = require('../helpers/formatSaleData');
const { development, test, production } = require('../database/config/config');
const { errorsTypes } = require('../utils/errorsCatalog');

const sequelize = new Sequilize(development || test || production);

const ASSOCIATIONS = [
  { model: user, as: 'user', attributes: ['name'] },
  { model: user, as: 'seller', attributes: ['name'] },
  { 
    model: product,
    as: 'products',
    attributes: { exclude: ['urlImage'] },
    through: { attributes: ['quantity'], as: 'productQuantity' },
  },
];

const findAll = async () => {
  const allSales = await sale.findAll({ include: ASSOCIATIONS });
  if (!allSales) throw new Error(errorsTypes.SALES_NOT_FOUND);
  return allSales.map((currSale) => formatSalesData(currSale));
};

const findById = async (id) => {
  const saleById = await sale.findByPk(id, { include: ASSOCIATIONS });
  if (!saleById) throw new Error(errorsTypes.SALE_NOT_FOUND);
  return formatSalesData(saleById);
};

const addSale = async (userId, saleData) => {
  const newSaleId = await sequelize.transaction(async (transaction) => {
    const { products, ...saleInfo } = saleData;
    const saleDate = new Date();
    const status = 'Pendente';

    const { id: saleId } = await sale.create({
      ...saleInfo,
      userId,
      saleDate,
      status,
    }, { transaction });

    const insertProducts = products.map(({ productId, quantity }) => ({
      saleId, productId, quantity,
    }));
    await salesProduct.bulkCreate(insertProducts, { transaction });

    return saleId;
  });

  return findById(newSaleId);
};

const updateSaleStatus = async (id, saleStatus) => {
  const statusTypes = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];
  if (!saleStatus) throw new Error(errorsTypes.PROPERTY_STATUS_INVALID);
  if (!statusTypes.includes(saleStatus)) throw new Error(errorsTypes.INVALID_STATUS);
  await sale.update(saleStatus, { where: { id } });
  return findById(id);
};

module.exports = {
  findAll,
  findById,
  addSale,
  updateSaleStatus,
};
