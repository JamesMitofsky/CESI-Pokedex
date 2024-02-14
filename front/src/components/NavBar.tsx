import { Button } from "@/components/ui/button";
import RoundImageDisplay from "@/components/RoundImageDisplay";

export default function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-lime-500">
      <div className="flex">
        <RoundImageDisplay src="/images/palworld-logo.png" fallbackText="Logo" className="h-20 w-44"/>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Accueil</Button>
        <Button variant="ghost">Inscription</Button>
        <RoundImageDisplay src="https://github.com/shadcn.png" fallbackText="user" />
      </div>
    </header>
  );
}
