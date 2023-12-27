import Projects from "./Projects";
import Experience from "./Experience";
import Service from "./Service";
import Contact from "./Contact";
import Hero from "./Hero";

export default function Home(props: { setIsShowImagesActive: Function }) {
  return (
    <>
      <Hero />
      <Projects setIsShowImagesActive={props.setIsShowImagesActive} />
      <Experience />
      <Service />
      <Contact />
    </>
  );
}
