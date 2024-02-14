import { Link } from "react-router-dom";
import ProjectsArray from "../../assets/arrays/projects";
import Blocks2 from "../../assets/curves/Blocks2";
import Waves1 from "../../assets/curves/Waves1";
import ProjectCard from "../../components/ProjectCard";

interface IProject {
  PName: string;
  PLangs: string[];
  PType: number;
  ProjectId: number;
  image: string;
  LiveLink: string;
  GitLink: string;
  Team: number;
}
[];

export default function Projects(props: { setIsShowImagesActive: Function }) {
  return (
    <div className="ProjectsSection relative min-h-screen overflow-hidden pb-56">
      <Blocks2 className="w-full pointer-events-none objCurves" />
      <div className="contentContainer my-12">
        <h1 className=" text-center text-mainHover text-[40px]">პროექტები</h1>

        <div className="flex gap-3 justify-center mt-16 flex-wrap md:gap-3">
          {ProjectsArray.slice(0, 9).map((e: IProject, i: number) => (
            <ProjectCard
              key={i}
              image={e.image}
              showImages={{
                title: e.PName,
                images: ["", ""],
              }}
              setIsShowImagesActive={props.setIsShowImagesActive}
            />
          ))}
        </div>
        <Link to={"/Projects"}>
          <button className="defButton block m-auto mt-10">ყველას ნახვა</button>
        </Link>
      </div>
      <Waves1 className="w-full pointer-events-none absolute bottom-0 objCurves" />
    </div>
  );
}
