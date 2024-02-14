import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function RoundImageDisplay({src, fallbackText, className}: {src: string, fallbackText: string, className?: string}) {
return (
<Avatar className={className}>
  <AvatarImage src={src}/>
  <AvatarFallback>{fallbackText}</AvatarFallback>
</Avatar>
);
}