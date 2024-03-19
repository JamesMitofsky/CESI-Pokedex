import { Creature } from "../../types/creature";
import { InputForm } from "../components/SearchBar";
import { useState, useEffect } from "react";
import CreatureDialog from "../components/CreatureDialog";
import LinkCreation from "../components/LinkToCreationPageButton";
import PokedexCard from "@/components/PokedexCard";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(
    null
  );

  const [pals, setPals] = useState<Creature[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/pals")
      .then((response) => response.json())
      .then((data) => setPals(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (selectedCreature) {
      setIsDialogOpen(true);
    }
  }, [selectedCreature]);
  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedCreature(null);
    }
  }, [isDialogOpen]);

  return (
    <>
      <InputForm />
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {pals.map((pal) => (
          <PokedexCard
            key={pal.idPal}
            creature={pal}
            setSelectedCreature={setSelectedCreature}
          />
        ))}
      </div>


      <LinkCreation/>
      <CreatureDialog
        open={isDialogOpen}
        setOpen={setIsDialogOpen}
        creature={selectedCreature}
      />
    </>
  );
}

export default App;
