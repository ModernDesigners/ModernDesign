import { TechnologyList } from "../../assets/arrays/technologies";
import { Iclock, Istar } from "../../assets/icons/icons";
import LangIcon from "./components/LangIcon";

interface ITechnology {
  id: number;
  image: string;
  name: string;
  color: string;
}

export default function Experience() {
  return (
    <div className="ExperienceSection pb-40 bg-experienceBg py-10">
      <div className="contentContainer">
        <div className="flex items-center">
          <h1 className="text-white text-2xl pr-8">გამოცდილება</h1>
          <div className="h-1 w-full bg-mainWhite rounded-xl translate-y-[3px]"></div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <Istar className=" [&>path]:fill-cyanDecor drop-shadow-stars rotate-45 -translate-x-6" />
          <Istar className=" [&>path]:fill-cyanDecor drop-shadow-stars -rotate-45 translate-x-6" />
        </div>

        <div className="flex mt-20">
          <div className="text-mainWhiteT [&>div>p]:mb-3 [&>div>p]:max-w-[550px] w-[50%] flex flex-col justify-between">
            <div className="">
              <p>3 წლიანი გამოცდილება ვებ-დეველოპმენტში</p>
              <p>სამუშაო გამოცდილება გუნდურ, სატესტო და რეალურ პროექტებზე.</p>
              <p>
                ვებსაიტების, აპლიკაციების და ბანერების დიზაინების გამოცდილება
                FIGMA -ს დახმარებით
              </p>
              <p>
                ვებსაიტების, აპლიკაციების და ბანერების დიზაინების გამოცდილება
                FIGMA -ს დახმარებით
              </p>
            </div>

            <div className="flex gap-4 flex-col">
              <div className="flex items-center text-white tracking-widest">
                <div className=" h-9 aspect-square rounded-full bg-cardBg flex justify-center items-center mr-3 ">
                  <Iclock className="[&>path]:stroke-cyanDecor" />
                </div>
                სწრაფი მომსახურება
              </div>
              <div className="flex items-center text-white tracking-widest">
                <div className=" h-9 aspect-square rounded-full bg-cardBg flex justify-center items-center mr-3 ">
                  <Istar className="[&>path]:fill-cyanDecor" />
                </div>
                ოპტიმიზირებული/სწრაფი პროექტები
              </div>
            </div>
          </div>
          <div className="flex justify-center min-h-full w-[50%]">
            <div className=" min-w-[90%] w-[550px] bg-cardBg border-2 border-cardBorder rounded-lg py-10 px-16">
              <p className="text-center text-white text-lg">
                ტექნოლოგიები რომლებთანაც გვიმუშავია
              </p>
              <div className=" w-14 h-[3px] rounded-lg bg-lineWhite mx-auto my-5"></div>
              <div className="flex flex-wrap justify-center gap-5">
                {TechnologyList.map((e: ITechnology, i: number) => (
                  <LangIcon
                    key={i}
                    image={e.image}
                    title={e.name}
                    color={e.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
