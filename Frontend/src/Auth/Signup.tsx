import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button" // Don't forget the button import!
import { signUpValidation } from "@/lib/validation"
import Loader from "@/components/loader/Loader"
import { Link } from "react-router-dom"


const Signup = () => {

  const isloading = false
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      name :"",
      username: "",
      email :"",
      password :"",
    },
  })

  // Submit handler
  function onSubmit(values: z. infer<typeof signUpValidation>) {
    console.log(values)
  }

  return (
<Form {...form}>
 <div className="spacing-reset w-full max-w-[420px] mx-auto flex-center flex-col">
  <img src="/logo.svg" alt="logo" className="block mb-0 mt-0 p-0 h-10 w-100" />
  <h2 className="text-lg font-bold mt-0 mb-2 text-center">
   Create a new account</h2>
<p className="text-light-4 small-medium md:base-regular mt-2">
To use snapgram please enter your details
</p>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5 mt-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="m-0 p-0 space-y-0">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem className="m-0 p-0 space-y-0">
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text"className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <Button type="submit" className="shad-button_primary w-full ml-20 mt-10">
        {isloading ? <Loader/> :"Sign-up" }</Button>
        <p className="text-xs text-light-2 text-center mt-1">Already have an account ?
      <Link to="/login" className="text-primary-500 text-small semi-bold ml-1"> Login</Link>
        </p>
    </form>
  </div>
</Form>

  )
}

export default Signup
