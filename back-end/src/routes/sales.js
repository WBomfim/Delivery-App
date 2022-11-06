const router = require('express').Router();
const salesController = require('../controllers/sales');
const auth = require('../middlewares/auth');

router.get('/', salesController.findAll);

router.get('/:id', salesController.findById);

router.post('/', auth, salesController.addSale);

router.patch('/:id', auth, salesController.updateSaleStatus);

module.exports = router;
