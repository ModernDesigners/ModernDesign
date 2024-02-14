import { useEffect, useState } from "react";
import projects from "../../../assets/arrays/projects";
import ProjectCard from "../../../components/ProjectCard";

interface ProjectCardInterface {
  setIsShowImagesActive: Function;
}
function SuggestProjects({ setIsShowImagesActive }: ProjectCardInterface) {
  const [randRange, setRandRange] = useState(
    Math.floor(Math.random() * (projects.length - 3))
  );

  useEffect(() => {
    setRandRange(Math.floor(Math.random() * (projects.length - 3)));
  }, [location.pathname]);

  return (
    <div className=" contentContainer mt-6">
      <h1 className="mb-5 text-xl">სხვა პროექტები :</h1>

      <div className="flex gap-[2%] lg:flex-col lg:items-center lg:[&_.projectCard]:w-[80%] lg:gap-12 ">
        {projects.slice(randRange, randRange + 3).map((e) => (
          <ProjectCard
            image={e.image}
            showImages={{
              title: e.PName,
              images: e.showImages,
            }}
            setIsShowImagesActive={setIsShowImagesActive}
          />
        ))}
      </div>
    </div>
  );
}
export default SuggestProjects;
