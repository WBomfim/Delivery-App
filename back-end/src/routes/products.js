const router = require('express').Router();
const productsController = require('../controllers/products');

const routerProducts = router;

routerProducts.get('/', productsController);

module.exports = routerProducts;
