const loginService = require('../services/login');
const statusHttp = require('../utils/statusHttp');

const login = async (req, res) => {
  const { email, password } = req.body;
  const validatedUser = await loginService(email, password);
  res.status(statusHttp.OK).json(validatedUser);
};

module.exports = login;
