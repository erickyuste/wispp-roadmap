import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Kinder from "./routes/Kinder";
import PreP from "./routes/PreP";
import Grade1 from "./routes/Grade1";
import Grade2 from "./routes/Grade2";
import Grade3 from "./routes/Grade3";
import Grade4 from "./routes/Grade4";
import Grade5 from "./routes/Grade5";
import Grade6 from "./routes/Grade6";
import Grade7 from "./routes/Grade7";
import Grade8 from "./routes/Grade8";
import Grade9 from "./routes/Grade9";
import Grade10 from "./routes/Grade10";

function App() {
  return (
    <>
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kinder" element={<Kinder />} />
          <Route path="/pre-p" element={<PreP />} />
          <Route path="/g1" element={<Grade1 />} />
          <Route path="/g2" element={<Grade2 />} />
          <Route path="/g3" element={<Grade3 />} />
          <Route path="/g4" element={<Grade4 />} />
          <Route path="/g5" element={<Grade5 />} />
          <Route path="/g6" element={<Grade6 />} />
          <Route path="/g7" element={<Grade7 />} />
          <Route path="/g8" element={<Grade8 />} />
          <Route path="/g9" element={<Grade9 />} />
          <Route path="/g10" element={<Grade10 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
