const salesService = require('../services/sales');
const statusHttp = require('../utils/statusHttp');

const findAllByUser = async (req, res) => {
  const { id } = req.user;
  const allSales = await salesService.findAllByUser(id);
  return res.status(statusHttp.OK).json(allSales);
};

const findAllBySeller = async (req, res) => {
  const { id } = req.user;
  const allSales = await salesService.findAllBySeller(id);
  return res.status(statusHttp.OK).json(allSales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const saleById = await salesService.findById(id);
  return res.status(statusHttp.OK).json(saleById);
};

const addSale = async (req, res) => {
  const { id } = req.user;
  const { body } = req;
  const newSale = await salesService.addSale(id, body);
  return res.status(statusHttp.CREATED).json(newSale);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedSale = await salesService.updateStatus(id, status);
  return res.status(statusHttp.OK).json(updatedSale);
};

module.exports = {
  findAllByUser,
  findAllBySeller,
  findById,
  addSale,
  updateStatus,
};
