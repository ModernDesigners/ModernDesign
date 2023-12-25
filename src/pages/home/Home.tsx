import Projects from "./Projects";
import Experience from "./Experience";
import Service from "./Service";
import Contact from "./Contact";
import Hero from "./Hero";

export default function Home(props: {
  setShowImages: Function;
  setIsShowImagesActive: Function;
}) {
  return (
    <>
      <Hero />
      <Projects
        setShowImages={props.setShowImages}
        setIsShowImagesActive={props.setIsShowImagesActive}
      />
      <Experience />
      <Service />
      <Contact />
    </>
  );
}
