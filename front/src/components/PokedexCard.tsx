import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Creature } from "../../types/creature";

export default function PokedexCard({
  creature,
  setSelectedCreature,
}: {
  creature: Creature;
  setSelectedCreature: (creature: Creature) => void;
}) {
  return (
    <Card
      className="flex flex-col w-96 m-2"
      onClick={() => setSelectedCreature(creature)}
    >
      <CardHeader>
        <CardTitle>{creature.name}</CardTitle>
        <CardDescription>
          <div>
            Element :
            {creature.elements.map((element) => (
              <div key={element.idElement}>{element.name}</div>
            ))}
          </div>
          <div> Creature number : {creature.number}</div>
          <div> Skills : {creature.partnerSkill.libelle}</div>
          <div>
            Drops when defeated :
            {creature.drops.map((drop) => (
              <div key={creature.idPal}> {drop.name}</div>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        Works for :
        {creature.worksFor.map((work) => (
          <div key={creature.idPal}>
            Name: {work.libelle}, Level: {work.libelle}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
