const statusHttp = require('./statusHttp');

const errorsTypes = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USER_EXIST: 'USER_EXIST',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
  TOKEN_NOT_FOUND: 'TOKEN_NOT_FOUND',
  INVALID_TOKEN: 'INVALID_TOKEN',
  PROPERTY_STATUS_INVALID: 'PROPERTY_STATUS_INVALID',
  INVALID_STATUS: 'INVALID_STATUS',
  SALE_NOT_FOUND: 'SALE_NOT_FOUND',
  SALES_NOT_FOUND: 'SALES_NOT_FOUND',
};

const errorsCatalog = {
  USER_NOT_FOUND: {
    statusHttp: statusHttp.NOT_FOUND,
    message: 'User not found',
  },
  USER_EXIST: {
    statusHttp: statusHttp.CONFLICT,
    message: 'User already registered',
  },
  INVALID_PASSWORD: {
    statusHttp: statusHttp.UNAUTHORIZED,
    message: 'Invalid password',
  },
  TOKEN_NOT_FOUND: {
    statusHttp: statusHttp.UNAUTHORIZED,
    message: 'Token not found',
  },
  INVALID_TOKEN: {
    statusHttp: statusHttp.UNAUTHORIZED,
    message: 'Expired or invalid token',
  },
  PROPERTY_STATUS_INVALID: {
    statusHttp: statusHttp.BAD_REQUEST,
    message: 'Property is not equal status',
  },
  INVALID_STATUS: {
    statusHttp: statusHttp.BAD_REQUEST,
    message: 'Invalid status, must be "Pendente", "Preparando", "Em Trânsito" or "Entregue"',
  },
  SALE_NOT_FOUND: {
    statusHttp: statusHttp.NOT_FOUND,
    message: 'Sale not found',
  },
  SALES_NOT_FOUND: {
    statusHttp: statusHttp.NOT_FOUND,
    message: 'Sales not found',
  },
};

module.exports = {
  errorsTypes,
  errorsCatalog,
};
