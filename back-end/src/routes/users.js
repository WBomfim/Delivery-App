const router = require('express').Router();
const userController = require('../controllers/users');

router.post('/', userController.addUser);

module.exports = router;