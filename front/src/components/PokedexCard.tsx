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

  function handleClick() {
    setSelectedCreature(creature);
  }
  return (
    <Card className="flex flex-col w-96 m-2 relative" onClick={handleClick}>
      <CardHeader>
        <CardTitle className="mb-5">{creature.name}</CardTitle>
        <CardDescription>
          <div><span className="font-bold text-lg	text-gray-100	"> Element : </span> <span className="italic text-lg">{creature.elements.map(element => <span>{element.name}</span>)}</span> </div>
          <div><span className="font-bold text-lg	text-gray-100	"> Creature number : </span ><span className="italic text-lg">{creature.number}</span></div>
          <div><span className="font-bold text-lg	text-gray-100	"> Skills : </span><span  className="italic text-lg">{creature.partnerSkill.libelle}</span></div>
          {/* <img className="absolute top-0 right-0 m-5 w-20 rounded-lg" src={`../../src/assets/${creature.name}.png`} alt={creature.name} /> */}
          <div>
          <span className="font-bold text-lg	text-gray-100	">Drops when defeated :</span >
            {creature.drops.map((drop) => (
              <li className="italic text-lg" key={drop.idDrop}> {drop.name}</li>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
       <div className="font-bold text-lg	text-gray-100 justify-center flex	mb-3"> Works for : </div>
        {creature.worksFor.map((work) => (
          <div className="justify-between	flex" key={work.idWorksFor}>
            <div><span className="font-bold text-lg	text-gray-100	"> Name:</span><span className="italic text-lg"> {work.libelle}</span></div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
