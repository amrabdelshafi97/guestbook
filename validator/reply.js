const Joi = require('@hapi/joi');
const debug = require('debug')('app:reply-validator');


const replyValidationSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});

module.exports = function validate(reply) {
    const res = replyValidationSchema.validate(reply);
    return res;
};