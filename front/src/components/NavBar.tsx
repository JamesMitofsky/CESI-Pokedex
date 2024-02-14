import { Button } from "@/components/ui/button";
import RoundImageDisplay from "@/components/RoundImageDisplay";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <RoundImageDisplay src="/images/palworld-logo.png" fallbackText="Logo"/>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Accueil</Button>
        <Button variant="ghost">Inscription</Button>
        <RoundImageDisplay src="" fallbackText="user" />
      </div>
    </header>
  );
}
