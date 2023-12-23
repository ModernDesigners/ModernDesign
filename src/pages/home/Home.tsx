import Projects from "./Projects";
import Experience from "./Experience";
import Service from "./Service";
import Contact from "./Contact";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Service />
      <Contact />
    </>
  );
}
