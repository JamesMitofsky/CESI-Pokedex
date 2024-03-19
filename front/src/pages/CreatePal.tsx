import FormForPalDetails from "@/components/FormForPalDetails";

export default function CreatePal() {

  const createPal = async (values: any) => {
    console.log("Creating Pal with values", values);
  };
  return <FormForPalDetails action="Créer" handleSubmit={createPal} />;
}
