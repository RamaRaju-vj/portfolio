import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // Import the Experience component
import Footer from "./components/Footer"; // Import the Footer component
import DevOpsMarquee from "./components/DevOpsMarquee"; // Import the DevOpsMarquee component
import { ThemeProvider } from "./context/ThemeContext";
import ParallaxBackground from "./components/ParallaxBackground";

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300 relative">
        <ParallaxBackground />
        <Navbar />
        <Home />
        <DevOpsMarquee /> {/* Add DevOpsMarquee component here */}
        <Skills />
        <Projects />
        <Experience /> {/* Add Experience component here */}
        <Contact />
        <Footer /> {/* Add Footer component here */}
      </div>
    </ThemeProvider>
  );
}

export default App;
