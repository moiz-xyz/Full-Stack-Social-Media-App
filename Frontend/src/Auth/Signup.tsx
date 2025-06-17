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


const Signup = () => {
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
  <div className="w-full max-w-[420px] mx-auto flex-center flex-col">
    <img src="/logo.svg" alt="logo" />
    <h2 className="text-l font-bold pt-5 sm:pt-12 text-center">
      Enter your details to use Snapgram
    </h2>

    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5 mt-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
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
          <FormItem>
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
          <FormItem>
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
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="shad-button_primary w-full">Submit</Button>
    </form>
  </div>
</Form>

  )
}

export default Signup
