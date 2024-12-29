import "./css/App.css";
import Favorites from "./pages/Favorites.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
