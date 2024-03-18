import NavBar from "../components/NavBar";
import PokedexCard from "../components/PokedexCard";
import { Creature } from "../../types/creature";


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


const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-wrap gap-4">
      {creatures.map((creature) => (
        <div>
          <PokedexCard creature={creature} key={creature.id} />
        </div>
      ))}
      </div>

      </main>
    </>
  );
}

export default Home;
