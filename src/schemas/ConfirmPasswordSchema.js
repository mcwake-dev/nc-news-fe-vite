import Joi from "joi";

import PasswordSchema from "./PasswordSchema";

const ConfirmPasswordSchema = Joi.object({
  password: PasswordSchema,
  confirmPassword: Joi.ref("password"),
});

export default ConfirmPasswordSchema;
