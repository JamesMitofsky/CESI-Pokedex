import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Logo() {
return (
<Avatar>
  <AvatarImage src="/images/palworld-logo.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
);
}