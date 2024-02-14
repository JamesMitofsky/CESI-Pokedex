import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Logo/>
      </div>
      <p className="text-gray-600">This will be a great nav bar, you just haven't seen it yet</p>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Accueil</Button>
        <Button variant="ghost">Inscription</Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
