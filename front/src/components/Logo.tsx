import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Logo() {
return (
<Avatar className="h-20 w-22">
  <AvatarImage src="/images/palworld-logo.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
);
}