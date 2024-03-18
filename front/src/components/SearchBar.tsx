"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    searchValue: z.string()
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        searchValue: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 flex justify-center items-center gap-5 mb-10">
        <FormField 
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <FormItem >
              
              <FormControl>
                <Input placeholder="Chercher un pal.." {...field} />
              </FormControl>
             
              
            </FormItem>
          )}
        />
        <Button className="mt-0" type="submit">Chercher</Button>
      </form>
    </Form>
  )
}
