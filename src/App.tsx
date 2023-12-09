import Navbar from "./components/Navbar";
import Contact from "./pages/home/Contact";
import Experience from "./pages/home/Experience";
import Hero from "./pages/home/Hero";
import Projects from "./pages/home/Projects";
import Service from "./pages/home/Service";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Service />
      <Contact />
    </>
  );
}

export default App;
