const statusHttp = require('./statusHttp');

const errorsTypes = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
  TOKEN_NOT_FOUND: 'TOKEN_NOT_FOUND',
  INVALID_TOKEN: 'INVALID_TOKEN',
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
  TOKEN_NOT_FOUND: {
    statusHttp: statusHttp.UNAUTHORIZED,
    error: 'Token not found',
  },
  INVALID_TOKEN: {
    statusHttp: statusHttp.UNAUTHORIZED,
    error: 'Expired or invalid token',
  },
};

module.exports = {
  errorsTypes,
  errorsCatalog,
};