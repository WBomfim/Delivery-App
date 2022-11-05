const router = require('express').Router();
const userController = require('../controllers/users');

router.post('/', userController.addUser);

router.get('/sallers', userController.getSallers);

module.exports = router;
