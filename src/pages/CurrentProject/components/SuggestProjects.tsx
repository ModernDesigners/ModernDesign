import projects from "../../../assets/arrays/projects";
import ProjectCard from "../../../components/ProjectCard";
import CurrentProject from "../CurrentProject";

interface ProjectCardInterface {
  setShowImages: Function;
  setIsShowImagesActive: Function;
  setCurrentProject: Function;
  currentProject: string;
}
export default function SuggestProjects({
  setShowImages,
  setCurrentProject,
  setIsShowImagesActive,
  currentProject,
}: ProjectCardInterface) {
  return (
    <div className=" contentContainer mt-6">
      <h1 className="mb-5 text-xl">სხვა პროექტები :</h1>

      <div className="flex gap-[2%]">
        {projects.slice(0, 3).map((e) => (
          <ProjectCard
            image={e.image}
            showImages={{
              title: e.PName,
              images: e.showImages,
            }}
            setShowImages={setShowImages}
            setIsShowImagesActive={setIsShowImagesActive}
            setCurrentProject={setCurrentProject}
            currentProject={currentProject}
          />
        ))}
      </div>
    </div>
  );
}
