const router = require('express').Router();
const auth = require('../middlewares/auth');
const productsController = require('../controllers/products');

router.get('/', auth, productsController.findAll);

module.exports = router;
