const router = require('express').Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/users');

router.post('/', userController.addUser);

router.get('/sellers', auth, userController.getSellers);

module.exports = router;
