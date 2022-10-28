const statusHttp = require('./statusHttp');

const errorsTypes = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
};

const errorsCatalog = {
  USER_NOT_FOUND: {
    statusHttp: statusHttp.UNAUTHORIZED,
    error: 'User not found',
  },
  INVALID_PASSWORD: {
    statusHttp: statusHttp.UNAUTHORIZED,
    error: 'Invalid password',
  },
};

module.exports = {
  errorsTypes,
  errorsCatalog,
};
