import { Button } from "@/components/ui/button";
import RoundImageDisplay from "@/components/RoundImageDisplay";
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-lime-500">
      <div className="flex">
        <RoundImageDisplay src="/images/palworld-logo.png" fallbackText="Logo" className="h-20 w-44"/>
      </div>
      <div className="flex items-center space-x-4">
      
      <Link to="/">
        <Button variant="ghost">Accueil</Button>
      </Link>

      <Link to="/login">
        <Button variant="ghost">Se connecter</Button>
      </Link>
        
        <RoundImageDisplay src="https://github.com/shadcn.png" fallbackText="user" />
      </div>
    </header>
  );
}
