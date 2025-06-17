import * as z from "zod"

export const signUpValidation = z.object({
  username: z.string().min(2 , {message : "Too short"}).max(50),
  name: z.string().min(2 ,{message : "Too short"}).max(50),
  email: z.string().email(),
  password: z.string().min(8 , {message :"Password cannot be less than 8 "}).max(14),
})