const Sequilize = require('sequelize');
const { development, test, production } = require('../database/config/config');
const { user, sale, product, salesProduct } = require('../database/models');
const formatSalesData = require('../helpers/formatSaleData');
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

const findAllByUser = async (id) => {
  const allSales = await sale.findAll({ where: { userId: id }, include: ASSOCIATIONS });
  if (!allSales) throw new Error(errorsTypes.SALES_NOT_FOUND);
  return allSales.map((currSale) => formatSalesData(currSale));
};

const findAllBySeller = async (id) => {
  const allSales = await sale.findAll({ where: { sellerId: id }, include: ASSOCIATIONS });
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

const updateStatus = async (id, saleStatus) => {
  const STATUS_TYPE = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];
  if (!saleStatus) throw new Error(errorsTypes.PROPERTY_STATUS_INVALID);
  if (!STATUS_TYPE.includes(saleStatus)) throw new Error(errorsTypes.INVALID_STATUS);
  await sale.update({ status: saleStatus }, { where: { id } });
  return findById(id);
};

module.exports = {
  findAllByUser,
  findAllBySeller,
  findById,
  addSale,
  updateStatus,
};
