const router = require('express').Router();
const salesController = require('../controllers/sales');

router.get('/', salesController.findAll);

module.exports = router;
