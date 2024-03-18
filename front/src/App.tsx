import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import { Creature } from "types/creature";
import NavBar from "./components/NavBar";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(
    null
  );

  useEffect(() => {
    if (selectedCreature) {
      setIsDialogOpen(true);
    }
  }, [selectedCreature]);
  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedCreature(null);
    }
  }, [isDialogOpen]);

  return (
    <Router>
      <NavBar />
      <main className="flex flex-col items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
