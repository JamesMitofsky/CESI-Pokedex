import PokedexCard from "../components/PokedexCard";
import { Creature } from "../../types/creature";
import { InputForm } from "../components/SearchBar";
import { useState, useEffect } from "react";
import CreatureDialog from "../components/CreatureDialog";
import LinkCreation from "../components/LinkToCreationPageButton";

const creatures: Creature[] = [
  {
    id: 1,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 2,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },
  {
    id: 3,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 4,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 5,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 6,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 7,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 8,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 9,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 10,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 11,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 12,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 13,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 14,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 15,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
  {
    id: 16,
    name: "Mermaid",
    number: 102,
    element: "Eau",
    partnerSkill: "Water Control",
    worksFor: [
      {
        name: "Ocean Kingdom",
        level: 4,
      },
    ],
    drop: ["Mermaid Scale", "Pearl"],
  },{
    id: 17,
    name: "Dragon",
    number: 101,
    element: "Feu",
    partnerSkill: "Fire Breath",
    worksFor: [
      {
        name: "Fire Kingdom",
        level: 5,
      },
    ],
    drop: ["Dragon Scale", "Dragon Tooth"],
  },
 
];

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(
    null
  );

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
        {creatures.map((creature) => (
          <PokedexCard
            creature={creature}
            key={creature.id}
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
