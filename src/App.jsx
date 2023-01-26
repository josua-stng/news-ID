import { Route, Routes } from "react-router-dom";
import Entertaiment from "./routes/Entertaiment";
import Health from "./routes/Health";
import Home from "./routes/Home";
import Sports from "./routes/Sports";
import Technology from "./routes/Technology";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/entertaiment" element={<Entertaiment />} />
      <Route path="/health" element={<Health />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
