const md5 = require('md5');
const { getUser } = require('./user');
const generateToken = require('../helpers/generateToken');
const validateLoginInfos = require('../schemas/validateLoginInfos');

const login = async (email, password) => {
  validateLoginInfos({ email, password });
  const user = await getUser(email);
  if (!user) {
    throw new Error({ code: 404, error: { message: 'User not found' } });
  }
  const { password: userPassword } = user;
  if (md5(password) !== userPassword) {
    throw new Error({ code: 401, error: { message: 'Incorrect password' } });
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
