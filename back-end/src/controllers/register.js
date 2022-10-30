const registerService = require('../services/register');
const statusHttp = require('../utils/statusHttp');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const result = await registerService({ name, email, password, role });
  res.status(statusHttp.CREATED).json(result);
};

module.exports = register;
