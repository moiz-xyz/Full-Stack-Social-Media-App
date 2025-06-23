//  joii schema
import Joi from "joi"

export const signupSchema = Joi.object({
  username: Joi.string().min(2).required().messages({
    "string.empty": "Username is required",
    "string.min": "Username must be at least 2 characters long",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be valid",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
  }),
});