import { Button } from "@/components/ui/button";
import RoundImageDisplay from "@/components/RoundImageDisplay";

export default function NavBar() {
  return (
    <header className="flex justify-between p-4 h-9">
      <div className="flex">
        <RoundImageDisplay src="/images/palworld-logo.png" fallbackText="Logo" className="h-2/4 w-1/5"/>
      </div>
      <div className="flex space-x-4">
        <Button variant="ghost">Accueil</Button>
        <Button variant="ghost">Inscription</Button>
        <RoundImageDisplay src="https://github.com/shadcn.png" fallbackText="user" />
      </div>
    </header>
  );
}
