const Joi = require("@hapi/joi");
const debug = require("debug")("app:user-validator");

const userValidationSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
});

module.exports = function validate(user) {
  const res = userValidationSchema.validate(user);
  return res;
};
