const joi = require('joi');

const schemaEmail = joi.string().email().empty().required()
  .messages({
  'string.empty': '400|The "email" field is required',
  'any.required': '400|email is required',
  'string.email': '400|Invalid email',
});

const schemaPassword = joi.string().min(6).empty().required()
  .messages({
  'string.empty': '400|The "password" field is required',
  'any.required': '400|password is required',
  'string.min': '400|password must be at least 6 characters',
});

const validateLoginInfos = async ({ email, password }) => {
  const schema = joi.object().keys({
    email: schemaEmail,
    password: schemaPassword,
  });

  const { error } = schema.validate({ email, password });
  if (error) {
    const [code, message] = error.message.split('|');
    throw new Error({ code: Number(code), error: { message } });
  }

  return true;
};

module.exports = validateLoginInfos;
