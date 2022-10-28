const StatusHttp = require('../utils/statusHttp');
const { errorsCatalog } = require('../utils/errorsCatalog');

const handleErros = (err, _req, res, _next) => {
  const mappedError = errorsCatalog[err.message];

  if (mappedError) {
    const { statusHttp, error } = mappedError;
    return res.status(statusHttp).json({ error });
  }

  const [code, message] = err.message.split('|');

  if (code && message) {
    return res.status(Number(code)).json({ message });
  }

  return res.status(StatusHttp.INTERNAL_ERROR).json({ message: 'Internal server error' });
};

module.exports = handleErros;
