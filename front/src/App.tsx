import CountBtn from "@/components/CountBtn";
import { Badge } from "@/components/ui/badge";
import PokedexCard from "./components/PokedexCard";
import { Creature } from "../types/creature";

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
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4"></div>
        <a
          href="https://ui.shadcn.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Badge variant="outline">shadcn/ui</Badge>
        </a>
        <CountBtn />
        <PokedexCard creature={creatures[0]} />
 
      </div>
    </main>
  );
}

export default App;
