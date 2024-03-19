import { Creature } from "types/creature";
import EditPalButton from "./EditPalButton";
import DeletePalButton from "./DeletePalButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
export default function CreatureDialog({
  open,
  setOpen,
  creature,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  creature: Creature | null;
}) {
  return (
    <>
      {creature && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{creature.name}</DialogTitle>
              <DialogDescription>
                <div>
                  <span className="font-bold text-lg	text-gray-100	">
                    Element :
                  </span>
                  <span className="italic text-lg">
                    {creature.elements.map((element) => (
                      <span>{element.name}</span>
                    ))}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-lg	text-gray-100	">
                    Creature number :
                  </span>
                  <span className="italic text-lg">{creature.number}</span>
                </div>
                <div>
                  <span className="font-bold text-lg	text-gray-100	">
                    Skills :
                  </span>
                  <span className="italic text-lg">
                    {creature.partnerSkill.libelle}
                  </span>
                </div>
                {/* <img
                  className="absolute top-0 right-0 m-5 w-20 rounded-lg"
                  src={`../../src/assets/${creature.name}.png`}
                  alt={creature.name}
                /> */}
                <div>
                  <span className="font-bold text-lg	text-gray-100	">
                    Drops when defeated :
                  </span>
                  {creature.drops.map((drop) => (
                    <li className="italic text-lg" key={drop.idDrop}>
                      {drop.name}
                    </li>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-between">
              <DeletePalButton />
              <EditPalButton />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
