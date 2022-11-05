const userService = require('../services/users');
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

const getSallers = async (_req, res) => {
  const result = await userService.getSallers();
  res.status(statusHttp.OK).json(result);
};

module.exports = {
  login,
  addUser,
  getSallers,
};
