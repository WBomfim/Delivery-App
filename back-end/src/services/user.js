const { User } = require('../database/models');

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getUser,
};
