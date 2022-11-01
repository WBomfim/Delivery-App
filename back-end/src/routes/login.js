const router = require('express').Router();
const userController = require('../controllers/users');

router.post('/', userController.login);

module.exports = router;
