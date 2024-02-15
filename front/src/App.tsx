import NavBar from "./components/NavBar";
import PokedexCard from "./components/PokedexCard";
import { Creature } from "../types/creature";
import { useState, useEffect } from 'react';
import CreatureDialog from "./components/CreatureDialog";

const creatures: Creature[] = [
  {
    id: 1,
    name: 'Dragon',
    number: 101,
    element: 'Feu',
    partnerSkill: 'Fire Breath',
    worksFor: [
      {
        name: 'Fire Kingdom',
        level: 5
      }
    ],
    drop: ['Dragon Scale', 'Dragon Tooth']
  },
  {
    id: 2,
    name: 'Mermaid',
    number: 102,
    element: 'Eau',
    partnerSkill: 'Water Control',
    worksFor: [
      {
        name: 'Ocean Kingdom',
        level: 4
      }
    ],
    drop: ['Mermaid Scale', 'Pearl']
  },
  // Add more creatures as needed
];


function App() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(null);

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
      <NavBar />
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap gap-4">
      {creatures.map((creature) => (

          <PokedexCard creature={creature} key={creature.id} setSelectedCreature={setSelectedCreature} />

      ))}
      </div>

      </main>
      <CreatureDialog open={isDialogOpen} setOpen={setIsDialogOpen} creature={selectedCreature} />
    </>
  );
}

export default App;

