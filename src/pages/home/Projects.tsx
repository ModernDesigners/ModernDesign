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

export default function Projects() {
  return (
    <div className="ProjectsSection relative min-h-screen overflow-hidden pb-56">
      <Blocks2 className="w-full pointer-events-none objCurves" />
      <div className="contentContainer my-12">
        <h1 className=" text-center text-mainHover text-[40px]">პროექტები</h1>

        <div className="flex gap-10 justify-center mt-16 flex-wrap">
          {ProjectsArray.map((e: IProject, i: number) =>
            i < 9 ? <ProjectCard key={i} image={e.image} /> : null
          )}
        </div>
        <button className="defButton block m-auto mt-10">ყველას ნახვა</button>
      </div>
      <Waves1 className="w-full pointer-events-none absolute bottom-0 objCurves" />
    </div>
  );
}