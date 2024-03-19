import { Creature } from "types/creature";
import {
    Dialog, DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "./ui/dialog";
export default function CreatureDialog({open, setOpen, creature}: {open: boolean, setOpen: (open: boolean) => void, creature: Creature | null}) {
  return (
    <>
      {creature && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{creature.name}</DialogTitle>
              <DialogDescription>
                <div>Element: {creature.element}</div>
                <div>Creature number: {creature.number}</div>
                <div>Skills: {creature.partnerSkill}</div>
                <div>
                  Drops when defeated:
                  {creature.drop.map((drop) => (
                    <div key={creature.id}>{drop}</div>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}