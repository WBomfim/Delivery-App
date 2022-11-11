const router = require('express').Router();
const salesController = require('../controllers/sales');
const auth = require('../middlewares/auth');

router.get('/customer', auth, salesController.findAllByUser);

router.get('/seller', auth, salesController.findAllBySeller);

router.get('/:id', auth, salesController.findById);

router.post('/', auth, salesController.addSale);

router.patch('/:id', auth, salesController.updateStatus);

module.exports = router;
