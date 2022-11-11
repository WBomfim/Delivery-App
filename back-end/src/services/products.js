const { product } = require('../database/models');

const findAll = async () => product.findAll();

module.exports = {
  findAll,
};
