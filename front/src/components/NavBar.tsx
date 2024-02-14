import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";

export default function NavBar() {
  return (<header className="navbar">
    
    <Logo/>

    <p>this will be a great nav bar, you just haven't seen it yet</p>

    <Button variant="ghost">Accueil</Button>

    <Button variant="ghost">Inscription</Button>

    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </header>
  );
}
