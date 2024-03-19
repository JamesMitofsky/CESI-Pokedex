import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
   
  }),
  element: z.string().min(2, {
    message: "Username must be at least 2 characters.",
   
  }),
  creatureNumber: z.string().min(2, {
    message: "Username must be at least 2 characters.",
   
  }),

    skills: z.string().min(2, {  message: "Username must be at least 2 characters.",}),
    dropsWhenDefeated: z.string().min(2, {  message: "Username must be at least 2 characters.",}),
    worksForName: z.string().min(2, {  message: "Username must be at least 2 characters.",}),
    worksForLevel: z.string().min(2, {  message: "Username must be at least 2 characters.",}),
})

export default function CreatePalComponent() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      element: "",
      creatureNumber: "",
      skills: "",
      dropsWhenDefeated: "",
      worksForName: "",
      worksForLevel: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="Nom du Pal" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="element"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Element</FormLabel>
              <FormControl>
                <Input placeholder="Quel element?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="creatureNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Creature Number</FormLabel>
              <FormControl>
                <Input placeholder="Numero de Pal?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <Input placeholder="Skills du Pal?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dropsWhenDefeated"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drops when Defeated</FormLabel>
              <FormControl>
                <Input placeholder="Quels drops?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="worksForName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Works For Name</FormLabel>
              <FormControl>
                <Input placeholder="Pour qui il travaille ce Pal?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="worksForLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Level of the Kingdom</FormLabel>
              <FormControl>
                <Input placeholder="Quelle niveau du Royaume?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
