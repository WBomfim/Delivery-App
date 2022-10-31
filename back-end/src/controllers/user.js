const userService = require('../services/user');
const statusHttp = require('../utils/statusHttp');

const login = async (req, res) => {
  const { email, password } = req.body;
  const validatedUser = await userService.login(email, password);
  res.status(statusHttp.OK).json(validatedUser);
};

const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const result = await userService.addUser(name, email, password);
  res.status(statusHttp.CREATED).json(result);
};

module.exports = {
  login,
  addUser,
};
