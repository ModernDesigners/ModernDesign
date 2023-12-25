import ProjectsList from "../../../assets/arrays/projects";
import { TechnologyList } from "../../../assets/arrays/technologies";

export default function CurrentProjectInfo(props: { ProjectName?: string }) {
  const currentProjectFilter = ProjectsList.filter(
    (e) => e.PName === props.ProjectName
  );

  return (
    <div className="flex justify-between py-20 container contentContainer gap-10 ">
      <img
        className="w-[50%] rounded-xl object-cover"
        src={currentProjectFilter[0].image}
        alt=""
      />
      <div className="w-full flex flex-col justify-between items-center">
        <div className=" w-full">
          <h1 className="text-[40px] mb-5 text-purple">
            {currentProjectFilter[0].PName}
          </h1>
          <p className="mb-5">ტიპი: ვებსაიტი</p>
          <div className="flex flex-wrap gap-2">
            <p>გამოყენებული ტექნოლოგიები:</p>
            {currentProjectFilter[0].PLangs.map((e) => {
              const correctColor = () => {
                return TechnologyList.filter((v) => v.name === e);
              };
              return (
                <p style={{ color: `${correctColor()[0].color}` }} className="">
                  {e}
                </p>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="flex gap-5">
            <button className="w-[50%] rounded-md p-1.5 text-white bg-purple ">
              ნახვა
            </button>
            <button className="w-[50%] rounded-md p-1.5 text-white bg-subBlack">
              GITHUB
            </button>
          </div>
          <button className="w-full mt-2 bg-greenButton rounded-md p-1.5 text-white">
            სრული ფოტო
          </button>
        </div>
      </div>
    </div>
  );
}
