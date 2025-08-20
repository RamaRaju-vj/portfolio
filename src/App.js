import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // Import the Experience component
import { ThemeProvider } from "./context/ThemeContext";
import ParallaxBackground from "./components/ParallaxBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 relative">
        <ParallaxBackground />
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Experience /> {/* Add Experience component here */}
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
