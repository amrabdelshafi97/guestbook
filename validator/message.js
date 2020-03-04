const Joi = require('@hapi/joi');
const debug = require('debug')('app:user-validator');


//Joi Message validation
const msgValidationSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});

module.exports = function validate(msg) {
    const res = msgValidationSchema.validate(msg);
    return res;
};