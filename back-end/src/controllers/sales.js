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

module.exports = {
  findAll,
  findById,
};
