const router = require('express').Router();
const userController = require('../controllers/users');

router.post('/', userController.addUser);

router.get('/sellers', userController.getSellers);

module.exports = router;
