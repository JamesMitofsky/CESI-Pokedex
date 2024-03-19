import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import { Creature } from "types/creature";
import NavBar from "./components/NavBar";
import CreatePal from './pages/CreatePal';
import ModifyPal from "./pages/ModifyPal";


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
      <main className="flex grow flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/creer" element={<CreatePal />} />
          <Route path="/modifier" element={<ModifyPal />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
