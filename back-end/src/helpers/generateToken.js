const jwt = require('jsonwebtoken');

// alterar para variaveis de ambiente
const secret = 'my-secret-key';

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const config = {
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, secret, config);

  return token;
};

module.exports = generateToken;
