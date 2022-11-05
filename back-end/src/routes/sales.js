const router = require('express').Router();
const salesController = require('../controllers/sales');

router.get('/', salesController.findAll);

router.get('/:id', salesController.findById);

module.exports = router;
