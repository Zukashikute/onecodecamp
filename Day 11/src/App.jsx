import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Another from "./pages/Another";
import Game from "./pages/TicTacToe";
import Context from "./pages/Context";
import WeatherDashboard from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke" element={<Another />} />
        <Route path="/tictactoe" element={<Game />} />
        <Route path="/context" element={<Context />} />
        <Route path="/weather" element={<WeatherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
