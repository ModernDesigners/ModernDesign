import CurrentProjectInfo from "./components/CurrentProjectInfo";
import { useParams } from "react-router-dom";
import SuggestProjects from "./components/SuggestProjects";
import { useContext, useEffect } from "react";
import { userContext } from "../../App";

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
}: ProjectCardInterface) {
  const navActions = useContext(userContext);
  const params = useParams();
  useEffect(() => {
    navActions.setNavActive(-1);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("aa");
  }, [location.pathname]);
  return (
    <div className=" padDown">
      <CurrentProjectInfo ProjectName={params.ProjectName} />
      <SuggestProjects
        setShowImages={setShowImages}
        setIsShowImagesActive={setIsShowImagesActive}
        setCurrentProject={setCurrentProject}
      />
    </div>
  );
}
