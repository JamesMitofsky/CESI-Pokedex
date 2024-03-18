import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Creature } from "../../types/creature";

export default function PokedexCard({ creature, setSelectedCreature }: { creature: Creature, setSelectedCreature: (creature: Creature) => void}) {
  return (
    <Card className="flex flex-col w-96 m-2" onClick={() => setSelectedCreature(creature)}>
      <CardHeader>
        <CardTitle>{creature.name}</CardTitle>
        <CardDescription>
          <div> Element : {creature.element}</div>
          <div> Creature number : {creature.number}</div>
          <div> Skills : {creature.partnerSkill}</div>
          <div>
            Drops when defeated :
            {creature.drop.map((drop) => (
              <div key={creature.id}> {drop}</div>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        Works for :
        {creature.worksFor.map((work) => (
          <div key={creature.id}>
            Name: {work.name}, Level: {work.level}
          </div>
        ))}
      </CardContent>
      <CardFooter>{/* <div>Card Footer</div> */}</CardFooter>
    </Card>
  );
}
