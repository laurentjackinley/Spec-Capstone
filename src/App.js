import { Routes, Route } from "react-router-dom";

import HomeHeader from "./pages/Home";
import Leagues from "./pages/Leagues";
import MainHeader from "./components/MainHeader";

import PremierLeague from "./components/PremiereLeague";
import LaLiga from "./components/LaLiga";
import League1 from "./components/League1";
import SerieA from "./components/SerieA";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/home" element={<HomeHeader />} />

          <Route path="/competitions" element={<Leagues />} />

          <Route path="league/l1" element={<PremierLeague />} />

          <Route path="league/l2" element={<LaLiga />} />
          <Route path="league/l3" element={<League1 />} />
          <Route path="league/l4" element={<SerieA />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
