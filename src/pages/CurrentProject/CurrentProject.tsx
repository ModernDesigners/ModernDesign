import CurrentProjectInfo from "./components/CurrentProjectInfo";
import { useParams } from "react-router-dom";
import SuggestProjects from "./components/SuggestProjects";

interface ProjectCardInterface {

  setShowImages: Function;
  setIsShowImagesActive: Function;
  setCurrentProject: Function;
  currentProject: string;
}

export default function CurrentProject({
  setShowImages,
  setCurrentProject,
  setIsShowImagesActive,
  currentProject,
}: ProjectCardInterface) {
  const params = useParams();
  console.log(params);

  // console.log(params);
  return (
    <>
      <CurrentProjectInfo ProjectName={params.ProjectName} />
      <SuggestProjects
        setShowImages={setShowImages}
        setIsShowImagesActive={setIsShowImagesActive}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
      />
    </>
  );
}
