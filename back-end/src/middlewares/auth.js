require('dotenv').config();
const jwt = require('jsonwebtoken');
const { errorsTypes } = require('../utils/errorsCatalog');

// alterar para variaveis de ambiente
const secret = 'my-secret-key';

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw new Error(errorsTypes.TOKEN_NOT_FOUND);

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (error) {
    throw new Error(errorsTypes.INVALID_TOKEN);
  }
};

module.exports = auth;
