import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const formInputInfo = [
  {
    id: "name",
    label: "Nom",
    placeholder: "Quel nom du Pal",
  },
  {
    id: "element",
    label: "Element",
    placeholder: "Quel element ?",
  },
  {
    id: "creatureNumber",
    label: "Numéro Pal",
    placeholder: "Quel est le numero du Pal?",
  },
  {
    id: "skills",
    label: "Skills",
    placeholder: "Quelles competences du Pal ?",
  },
  {
    id: "dropsWhenDefeated",
    label: "Drops",
    placeholder: "Quels drops ?",
  },
  {
    id: "worksForName",
    label: "Domaine dans lequel ce Pal travaille",
    placeholder: "Dans quel domaine travail ce Pal ?",
  },
  {
    id: "worksForLevel",
    label: "Niveau du Royaume",
    placeholder: "Quel niveau du Royaume a ce Pal ?",
  },
] as const;

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string(),
  element: z.string(),
  creatureNumber: z.string(),
  skills: z.string(),
  dropsWhenDefeated: z.string(),
  worksForName: z.string(),
  worksForLevel: z.string(),
});

export default function CreatePal() {
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
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center w-3/5">
        <div className="w-full flex flex-wrap gap-4 justify-center">
          {formInputInfo.map(({ id, label, placeholder }) => {

            if( id === 'element'){ return (
              
            <div className= "max-w-96 w-full space-y-2 m-2">
              <div className="max-w-96 w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> Element </div>
              <Select>
                <SelectTrigger className="max-w-96 w-full">
                  <SelectValue placeholder="Selectionner un element" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
           </div>
            )   

            } else {
            
            return (
            <FormField
              control={form.control}
              name={id}
              render={({ field }) => (
                <FormItem className="flex flex-col w-96 m-2">
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input placeholder={placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          })}
        </div>
        <Button className=" m-auto mt-4 max-w-96 w-full" type="submit">Créer</Button>
      </form>
    </Form>
  );
}
