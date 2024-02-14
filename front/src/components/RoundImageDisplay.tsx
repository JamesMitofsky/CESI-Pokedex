import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function RoundImageDisplay({src, fallbackText}: {src: string, fallbackText: string}) {
return (
<Avatar className="h-20 w-22">
  <AvatarImage src={src} />
  <AvatarFallback>{fallbackText}</AvatarFallback>
</Avatar>
);
}