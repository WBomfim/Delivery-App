const salesService = require('../services/sales');
const statusHttp = require('../utils/statusHttp');

const findAll = async (_req, res) => {
  const allSales = await salesService.findAll();
  res.status(statusHttp.OK).json(allSales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const saleById = await salesService.findById(id);
  res.status(statusHttp.OK).json(saleById);
};

const addSale = async (req, res) => {
  const { id: userId } = req.user;
  const { body } = req;
  const newSale = await salesService.addSale(userId, body);
  res.status(statusHttp.CREATED).json(newSale);
};

module.exports = {
  findAll,
  findById,
  addSale,
};
