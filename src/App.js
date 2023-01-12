import "./App.css";
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import SideBar from "./components/sidebar/SideBar";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const URL = "https://lb-portfolio-backend.herokuapp.com/about";
  return (
    <main className="main-bg">
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
}

export default App;
