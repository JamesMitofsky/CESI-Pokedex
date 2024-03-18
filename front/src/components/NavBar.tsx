import { Button } from "@/components/ui/button";
import RoundImageDisplay from "@/components/RoundImageDisplay";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-lime-500">
      <img src="/images/palworld-logo.png" alt="Logo" className="h-10 w-auto" />
      <div className="flex items-center gap-2">
        <Link to="/">
          <Button className="px-2 py-1" variant="ghost">Accueil</Button>
        </Link>

        <Link to="/login">
          <Button className="px-2 py-1" variant="ghost">Se connecter</Button>
        </Link>

        <RoundImageDisplay
          src="https://github.com/shadcn.png"
          fallbackText="user"
        />
      </div>
    </header>
  );
}
