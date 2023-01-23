import "./App.css";

// IMPORT COMPONENTS
import NavBar from "./components/navbar/NavBar";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // const URL = "https://lb-portfolio-backend.herokuapp.com/about";
  return (
    <main className="max-h-full bg-red-100 font-oswald">
      <NavBar />
      <div>
        <ul>
          <li id="home">
            <Home />
          </li>
          <li id="about">
            <About />
          </li>
          <li id="projects">
            <Projects />
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
