const md5 = require('md5');
const { user } = require('../database/models');
const generateToken = require('../helpers/generateToken');
const { validateLoginInfos, validateRegisterInfos } = require('../schemas/validateUserInfos');
const { errorsTypes } = require('../utils/errorsCatalog');

const login = async (email, password) => {
  validateLoginInfos({ email, password });

  const userExist = await user.findOne({ where: { email } });

  if (!userExist) throw new Error(errorsTypes.USER_NOT_FOUND);
  const { password: userPassword } = userExist;

  if (md5(password) !== userPassword) throw new Error(errorsTypes.INVALID_PASSWORD);
  const token = generateToken(userExist);

  return {
    name: userExist.name,
    email: userExist.email,
    role: userExist.role,
    token,
  };
};

const addUser = async (name, email, password) => {
  validateRegisterInfos({ name, email, password });

  const userExist = await user.findOne({ where: { email } });
  
  if (userExist) throw new Error(errorsTypes.USER_EXIST);

  const newUserFormat = {
    name,
    email,
    password: md5(password),
    role: 'customer',
  };

  const newUser = await user.create(newUserFormat);
  const token = generateToken(newUser);

  return {
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    token,
  };
};

const getSellers = async () => user.findAll({
  where: { role: 'seller' },
  attributes: { exclude: ['password', 'email', 'role'] },
});

module.exports = {
  login,
  addUser,
  getSellers,
};
