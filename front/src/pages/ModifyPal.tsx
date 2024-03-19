import FormForPalDetails from "@/components/FormForPalDetails";

const fetchedCreature = {
  name: "Poulet",
  element: "Feu",
  creatureNumber: "1",
  skills: "Coup de bec",
  dropsWhenDefeated: "Plume",
  worksForName: "Ferme",
  worksForLevel: "1",
} as const;

export default function ModifyPal() {
  const modifyPal = async (values: any) => {
    console.log("Modifying Pal with values", values);
  };
  return (
    <FormForPalDetails
      existingValues={fetchedCreature}
      action="Modifier"
      handleSubmit={modifyPal}
    />
  );
}
