import { useContext, useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectsArray from "../../assets/arrays/projects";
import ProjectsPageHeader from "./components/ProjectsPageHeader";
import { userContext } from "../../App";

export default function ProjectsPage(props: {
  setIsShowImagesActive: Function;
}) {
  const navActions = useContext(userContext);
  useEffect(() => {
    navActions?.setNavActive(1);
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState(-1);
  const options = [
    {
      title: "ყველა",
      filterGet: -1,
    },
    {
      title: "დიზაინი",
      filterGet: 0,
    },
    {
      title: "ვებსაიტი",
      filterGet: 1,
    },
  ];

  const [isActiveOption, setIsActiveOption] = useState(0);

  return (
    <div className="contentContainer md:mt-[100px] padDown">
      <ProjectsPageHeader
        setIsActiveOption={setIsActiveOption}
        isActiveOption={isActiveOption}
        options={options}
        setFilter={setFilter}
      />

      <div className="flex flex-wrap gap-3 justify-center">
        {filter !== -1
          ? ProjectsArray.map((e, i: number) =>
              e.PType == filter || e.PType == 2 ? (
                <ProjectCard
                  key={i}
                  image={e.image}
                  showImages={{ title: e.PName, images: e.showImages }}
                  setIsShowImagesActive={props.setIsShowImagesActive}
                />
              ) : null
            )
          : ProjectsArray.map((e, i: number) => (
              <ProjectCard
                key={i}
                image={e.image}
                showImages={{ title: e.PName, images: e.showImages }}
                setIsShowImagesActive={props.setIsShowImagesActive}
              />
            ))}
      </div>
    </div>
  );
}
