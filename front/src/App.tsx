import CountBtn from "@/components/CountBtn";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4"></div>
        <a
          href="https://ui.shadcn.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Badge variant="outline">shadcn/ui</Badge>
        </a>
        <CountBtn />
      </div>
    </main>
  );
}

export default App;
