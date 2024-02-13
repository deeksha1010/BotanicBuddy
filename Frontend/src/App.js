// App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlantInfo from "./pages/PlantInfo";
import PlantWatering from "./pages/PlantWatering";
import PlantAdoption from "./pages/PlantAdoption";
import Loginusr from "./pages/Loginusr";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PlantInfo" element={<PlantInfo />} />
          <Route path="/PlantWatering" element={<PlantWatering />} />
          <Route path="/PlantAdoption" element={<PlantAdoption />} />
          <Route path="/Loginusr" element={<Loginusr />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
