const md5 = require('md5');
const { getUser } = require('./user');
const generateToken = require('../helpers/generateToken');
const validateLoginInfos = require('../schemas/validateLoginInfos');
const { errorsTypes } = require('../utils/errorsCatalog');

const login = async (email, password) => {
  validateLoginInfos({ email, password });
  const user = await getUser(email);
  if (!user) {
    throw new Error(errorsTypes.USER_NOT_FOUND);
  }
  const { password: userPassword } = user;
  if (md5(password) !== userPassword) {
    throw new Error(errorsTypes.INVALID_PASSWORD);
  }
  const token = generateToken(user);
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
};

module.exports = login;
