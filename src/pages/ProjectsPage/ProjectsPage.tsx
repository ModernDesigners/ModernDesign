import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectsArray from "../../assets/arrays/projects";
import ProjectsPageHeader from "./components/ProjectsPageHeader";

export default function ProjectsPage(props: {
  setShowImages: Function;
  setIsShowImagesActive: Function;
}) {
  const options = [
    {
      title: "ყველა",
    },
    {
      title: "დიზაინი",
    },
    {
      title: "ვებსაიტი",
    },
  ];

  const [isActiveOption, setIsActiveOption] = useState(0);

  return (
    <div className="contentContainer md:mt-[100px]">
      <ProjectsPageHeader
        setIsActiveOption={setIsActiveOption}
        isActiveOption={isActiveOption}
        options={options}
      />

      <div className="flex flex-wrap gap-3 justify-center">
        {ProjectsArray.map((e, i: number) => (
          <ProjectCard
            key={i}
            image={e.image}
            showImages={{ title: e.PName, images: e.showImages }}
            setShowImages={props.setShowImages}
            setIsShowImagesActive={props.setIsShowImagesActive}
          />
        ))}
      </div>
    </div>
  );
}
