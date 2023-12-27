import CurrentProjectInfo from "./components/CurrentProjectInfo";
import { useParams } from "react-router-dom";
import SuggestProjects from "./components/SuggestProjects";
import { useContext, useEffect } from "react";
import { userContext } from "../../App";

interface ProjectCardInterface {
  setIsShowImagesActive: Function;
}

export default function CurrentProject({
  setIsShowImagesActive,
}: ProjectCardInterface) {
  const navActions = useContext(userContext);
  const params = useParams();
  useEffect(() => {
    navActions?.setNavActive(-1);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className=" padDown">
      <CurrentProjectInfo ProjectName={params.ProjectName} />
      <SuggestProjects setIsShowImagesActive={setIsShowImagesActive} />
    </div>
  );
}
