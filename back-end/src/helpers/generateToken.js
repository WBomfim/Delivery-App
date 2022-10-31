const jwt = require('jsonwebtoken');

// alterar para variaveis de ambiente
const secret = 'my-secret-key';

const generateToken = (user) => {
  const { id, email, role } = user;
  const payload = {
    id,
    email,
    role,
  };

  const config = {
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, secret, config);

  return token;
};

module.exports = generateToken;
