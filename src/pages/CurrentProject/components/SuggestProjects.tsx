import projects from "../../../assets/arrays/projects";
import ProjectCard from "../../../components/ProjectCard";

interface ProjectCardInterface {
  setShowImages: Function;
  setIsShowImagesActive: Function;
  setCurrentProject: Function;
}
export default function SuggestProjects({
  setShowImages,
  setCurrentProject,
  setIsShowImagesActive,
}: ProjectCardInterface) {
  const randRange = Math.floor(Math.random() * (projects.length - 3));
  console.log(randRange);

  return (
    <div className=" contentContainer mt-6">
      <h1 className="mb-5 text-xl">სხვა პროექტები :</h1>

      <div className="flex gap-[2%]">
        {projects.slice(randRange, randRange + 3).map((e) => (
          <ProjectCard
            image={e.image}
            showImages={{
              title: e.PName,
              images: e.showImages,
            }}
            setShowImages={setShowImages}
            setIsShowImagesActive={setIsShowImagesActive}
            setCurrentProject={setCurrentProject}
            currentProject={e.PName}
          />
        ))}
      </div>
    </div>
  );
}
