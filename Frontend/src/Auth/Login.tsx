import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signUpValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { signupUser } from "@/api/signupApi"


const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // ✅ Submit handler
  const onSubmit = async (values: z.infer<typeof signUpValidation>) => {
    setIsLoading(true)
    setErrorMessage("")
    try {
      const response = await signupUser(values)
      console.log("Login Success:", response)
      // console.log(response.token);
     const token = response.token;

if (token) {
  localStorage.setItem("authToken", token);
}
      } catch (error: any) {
      setErrorMessage(error.message)
      console.error("Signup Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <div className="spacing-reset w-full max-w-[420px] mx-auto flex-center flex-col">
        <img src="/logo.svg" alt="logo" className="block mb-0 mt-0 p-0 h-10 w-100" />
        <h2 className="text-lg font-bold mt-0 mb-2 text-center">
         Login in to your account
        </h2>
        <p className="text-light-4 small-medium md:base-regular mt-2">
          Welcome back ! please enter your details
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5 mt-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="m-0 p-0 space-y-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="m-0 p-0 space-y-0">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="shad-button_primary w-full ml-20 mt-10">
            {isLoading ? <Loader /> : "Sign-up"}
          </Button>
            <p className="text-xs text-red-500 text-center mt-1">{errorMessage}</p>
          {/* Link to Login */}
          <p className="text-xs text-light-2 text-center mt-1">
           Don't have a account ?
            <Link to="/signup" className="text-primary-500 text-small semi-bold ml-1">Signup</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default Login
