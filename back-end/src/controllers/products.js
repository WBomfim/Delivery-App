const productsService = require('../services/products');
const statusHttp = require('../utils/statusHttp');

const findAll = async (_req, res) => {
  console.log('2622562662');
  const allProducts = await productsService.findAll();
  res.status(statusHttp.OK).json(allProducts);
};

module.exports = findAll;
