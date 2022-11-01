const { products } = require('../database/models');

const findAll = async () => {
    const allProducts = await products.findAll();
    return allProducts;
};

module.exports = {
    findAll,
};