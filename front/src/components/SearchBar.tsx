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
    searchValue: z.string().min(2, {
    message: "Il nous faut au moins 2 charachter pour effectuer une recherche.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        searchValue: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
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
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-0" type="submit">Chercher</Button>
      </form>
    </Form>
  )
}
