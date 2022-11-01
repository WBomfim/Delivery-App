const router = require('express').Router();
const productsController = require('../controllers/products');

router.get('/', productsController.findAll);

module.exports = router;
