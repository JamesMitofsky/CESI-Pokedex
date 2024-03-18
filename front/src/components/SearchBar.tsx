"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

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

  interface IServerResponse {
    status: number;
    statusText: string;
    json: () => Promise<{ message: string; data: any }>;
  }
  
  async function simulateServerResponse(data: any): Promise<IServerResponse> {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve({
          message: 'Success',
          data: data
        })
      });
    }, 1000); // Simulate network delay
  });
}

async function onSubmit(data: z.infer<typeof FormSchema>) {
  console.log(data);

  // Simulate sending data to the server
  const response = await simulateServerResponse(data);

  // Check if the request was successful
  if (response.status === 200) {
    const responseData = await response.json();
    console.log('Success:', responseData);
  } else {
    console.log('Error:', response.status);
  }
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
        <Button type="submit">Chercher</Button>
      </form>
    </Form>
  )
}
