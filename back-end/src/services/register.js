const md5 = require('md5');
const { User } = require('../database/models');
const { getUser } = require('./user');
const { errorsTypes } = require('../utils/errorsCatalog');

const register = async ({ name, email, password, role }) => {
  const regexEmail = /\S+@\S+\.\S+/;

  const user = await getUser(email);
  if (user) {
    throw new Error(errorsTypes.USER_NOT_FOUND);
  }
  if (name.length < 12) {
    throw new Error(errorsTypes.INVALID_USER);
  }
  if (!regexEmail.test(email)) {
    throw new Error(errorsTypes.INVALID_EMAIL);
  }
  if (password.length < 6) {
    throw new Error(errorsTypes.INVALID_PASSWORD);
  }

  const hash = md5(password);

  await User.create({ name, email, hash, role });
  return 'Created';
};

module.exports = register;
