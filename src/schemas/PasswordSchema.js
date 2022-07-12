import Joi from "joi";

const PasswordSchema = Joi.string()
  .alphanum()
  .min(10)
  .max(100)
  .required()
  .error(
    new Error(
      "Password must be an alpha-numeric value with between 10 and 100 characters"
    )
  );

export default PasswordSchema;
