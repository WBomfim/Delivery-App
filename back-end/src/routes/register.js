const router = require('express').Router();
const registerController = require('../controllers/register');

router.post('/', registerController);

module.exports = router;